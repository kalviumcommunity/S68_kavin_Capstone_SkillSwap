const router = require('express').Router();
const { getAllUsers, getUserById } = require('../controllers/userController');
const { authenticateJWT } = require('../middleware/authMiddleware');

router.get('/', getAllUsers);
router.get('/:id', authenticateJWT, getUserById);

module.exports = router;