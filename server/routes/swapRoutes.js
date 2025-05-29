const router = require('express').Router();
const { proposeSwap, getUserSwaps, updateSwapStatus } = require('../controllers/swapController');
const { authenticateJWT } = require('../middleware/authMiddleware');

router.post('/', authenticateJWT, proposeSwap);
router.get('/', authenticateJWT, getUserSwaps);
router.put('/:id/status', authenticateJWT, updateSwapStatus);

module.exports = router;