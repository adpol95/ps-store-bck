const { Router } = require('express');
const path = require('path');
const socketHelper = require('../core/socket');

const router = Router();

// Endpoint to trigger a test notification
router.post('/send-test', (req, res) => {
    const { target, userId, userName, title, message, type } = req.body;

    if (!title || !message) {
        return res.status(400).json({ message: 'Title and message are required fields' });
    }

    const payload = {
        title,
        message,
        type: type || 'info',
        timestamp: Date.now()
    };

    let emitted = false;

    if (target === 'all') {
        emitted = socketHelper.broadcast('notification', payload);
    } else if (target === 'user') {
        if (!userId) {
            return res.status(400).json({ message: 'userId is required for user target' });
        }
        emitted = socketHelper.sendToUser(userId, 'notification', payload);
    } else if (target === 'username') {
        if (!userName) {
            return res.status(400).json({ message: 'userName is required for username target' });
        }
        emitted = socketHelper.sendToUsername(userName, 'notification', payload);
    } else {
        return res.status(400).json({ message: 'Invalid target type. Must be all, user, or username' });
    }

    if (emitted) {
        return res.status(200).json({ success: true, message: 'Notification emitted successfully', payload });
    } else {
        return res.status(500).json({ message: 'Socket.io has not been initialized on the backend' });
    }
});

// Endpoint to serve the socket.io test page
router.get('/test-client', (req, res) => {
    res.sendFile(path.join(__dirname, 'test-client.html'));
});

module.exports = router;
