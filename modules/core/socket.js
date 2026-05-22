const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');

let io = null;
const connectedUsers = new Map(); // Keep track of active connections: userId -> socketId[]

function init(server) {
    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    // Authentication middleware
    io.use((socket, next) => {
        const token = socket.handshake.auth?.token || socket.handshake.query?.token;

        if (!token) {
            // Allow unauthenticated connections as guest, but don't assign user info
            socket.user = null;
            return next();
        }

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            // In login.js, the profile is nested under `mongoProfile`
            socket.user = decoded.mongoProfile;
            next();
        } catch (err) {
            console.error('Socket authentication failed:', err.message);
            // We can either block connection or let it connect as a guest.
            // Let's block it for invalid tokens to avoid security issues, but allow guests if no token is passed.
            return next(new Error('Authentication error: Invalid token'));
        }
    });

    io.on('connection', (socket) => {
        const isGuest = !socket.user;
        const username = isGuest ? 'Guest' : socket.user.userName;
        const userId = isGuest ? null : socket.user._id;

        console.log(`Socket connected: ${socket.id} (User: ${username}, ID: ${userId})`);

        if (!isGuest) {
            // Join user-specific rooms
            socket.join(`user_${userId}`);
            socket.join(`user_${username}`);

            // Add to active users map
            if (!connectedUsers.has(userId)) {
                connectedUsers.set(userId, []);
            }
            connectedUsers.get(userId).push(socket.id);
        }

        // Setup generic listeners
        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
            if (!isGuest) {
                const userSockets = connectedUsers.get(userId);
                if (userSockets) {
                    const index = userSockets.indexOf(socket.id);
                    if (index !== -1) {
                        userSockets.splice(index, 1);
                    }
                    if (userSockets.length === 0) {
                        connectedUsers.delete(userId);
                    }
                }
            }
        });

        // Example custom event handling
        socket.on('ping_server', (data) => {
            console.log(`Received ping from ${username}:`, data);
            socket.emit('pong_client', { message: 'Hello from backend!', timestamp: Date.now() });
        });
    });

    return io;
}

/**
 * Send a real-time event to a specific user by MongoDB User ID
 * @param {string} userId 
 * @param {string} event 
 * @param {object} data 
 */
function sendToUser(userId, event, data) {
    if (io) {
        io.to(`user_${userId}`).emit(event, data);
        return true;
    }
    return false;
}

/**
 * Send a real-time event to a specific user by Username
 * @param {string} username 
 * @param {string} event 
 * @param {object} data 
 */
function sendToUsername(username, event, data) {
    if (io) {
        io.to(`user_${username}`).emit(event, data);
        return true;
    }
    return false;
}

/**
 * Broadcast an event to all connected clients
 * @param {string} event 
 * @param {object} data 
 */
function broadcast(event, data) {
    if (io) {
        io.emit(event, data);
        return true;
    }
    return false;
}

module.exports = {
    init,
    getIO: () => io,
    sendToUser,
    sendToUsername,
    broadcast,
    getConnectedUsers: () => Array.from(connectedUsers.keys())
};
