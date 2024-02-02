const { Router } = require('express');
const cardCreate = require(".//cardCreate");
const cardDelete = require(".//cardDelete");
const cardGetAll = require(".//cardGetAll");
const cardUpdateById = require(".//cardUpdateById");

const router = Router();

router.get('/', cardGetAll);
router.delete('/:cardId', cardDelete);
router.post('/', cardCreate);
router.patch('/:cardId', cardUpdateById);

module.exports = router;