const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/', authController.register); // Aquí no necesitas incluir '/api/register'

module.exports = router;
