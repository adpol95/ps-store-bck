const { Router } = require('express');
const cardCreate = require("./newUser");
const searchAFriend = require("./searchAFriend.js");
const cardDelete = require("./deleteUser");
const cardGetAll = require("./getAllUsers");
const cardUpdateById = require("./changeUser");
const login = require("./login");

const router = Router();

router.get('/', cardGetAll);
router.delete('/:cardId', cardDelete);
router.post('/', cardCreate);
router.post('/search', searchAFriend);
router.post('/login', login);
router.patch('/:cardId', cardUpdateById);

module.exports = router;