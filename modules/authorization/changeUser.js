const user = require('./Model');
const socketHelper = require('../core/socket');

function changeUser(req, res) {
  user
    .findByIdAndUpdate(req.params.cardId, req.body)
    .exec()
    .then((oldUser) => {
      if (!oldUser) {
        return res.status(404).json('User not found');
      }

      res.status(200).json(oldUser);

      // Send real-time notifications via Socket.io asynchronously
      try {
        const targetUserId = req.params.cardId;

        // 1. Friend Request Sent
        // e.g. PATCH /authorization/:targetUserId with { reqForFriends: currentUser }
        if (req.body.reqForFriends && req.body.reqForFriends._id) {
          const sender = req.body.reqForFriends;
          socketHelper.sendToUser(targetUserId, 'friend_request', { sender });
          socketHelper.sendToUser(targetUserId, 'notification', {
            title: 'New Friend Request',
            message: `${sender.userName} sent you a friend request.`,
            type: 'info',
            timestamp: Date.now()
          });
        }

        
        // 2. Friend Request Accepted
        // e.g. PATCH /authorization/:currentUserId with { friends: [...], reqForFriends: {} }
        else if (
          req.body.reqForFriends && 
          Object.keys(req.body.reqForFriends).length === 0 && 
          Array.isArray(req.body.friends)
        ) {
          const oldFriendIds = new Set((oldUser.friends || []).map(f => String(f._id)));
          const addedFriend = req.body.friends.find(f => f && f._id && !oldFriendIds.has(String(f._id)));
          
          if (addedFriend) {
            socketHelper.sendToUser(addedFriend._id, 'friend_accept', {
              user: {
                _id: oldUser._id,
                userName: oldUser.userName,
                avatar: oldUser.avatar
              }
            });
            socketHelper.sendToUser(addedFriend._id, 'notification', {
              title: 'Friend Request Accepted',
              message: `${oldUser.userName} accepted your friend request!`,
              type: 'success',
              timestamp: Date.now()
            });
          }
        }
        
        // 3. Friend Request Denied / Rejected
        // e.g. PATCH /authorization/:currentUserId with { reqForFriends: {} } (friends is undefined)
        else if (
          req.body.reqForFriends && 
          Object.keys(req.body.reqForFriends).length === 0 && 
          req.body.friends === undefined
        ) {
          const originalSender = oldUser.reqForFriends;
          if (originalSender && originalSender._id) {
            const originalSenderId = String(originalSender._id);
            socketHelper.sendToUser(originalSenderId, 'friend_reject', {
              user: {
                _id: oldUser._id,
                userName: oldUser.userName,
                avatar: oldUser.avatar
              }
            });
            socketHelper.sendToUser(originalSenderId, 'notification', {
              title: 'Friend Request Declined',
              message: `${oldUser.userName} declined your friend request.`,
              type: 'warning',
              timestamp: Date.now()
            });
          }
        }
        
        // 4. Friend Removed / Deleted
        // e.g. PATCH /authorization/:currentUserId with { friends: [...] } (removing target friend)
        else if (Array.isArray(req.body.friends) && req.body.reqForFriends === undefined) {
          const oldFriends = oldUser.friends || [];
          if (req.body.friends.length < oldFriends.length) {
            const newFriendIds = new Set((req.body.friends || []).map(f => String(f._id)));
            const deletedFriend = oldFriends.find(f => f && f._id && !newFriendIds.has(String(f._id)));
            
            if (deletedFriend) {
              socketHelper.sendToUser(String(deletedFriend._id), 'friend_delete', {
                user: {
                  _id: oldUser._id
                }
              });
            }
          }
        }
      } catch (err) {
        console.error('Error sending friend socket notification:', err);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User update error');
    });
}

module.exports = changeUser;