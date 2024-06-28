const express = require('express');
const templateController = require('../controller/templateController')
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', templateController.createTemplate);

module.exports = router;
