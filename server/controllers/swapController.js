const Swap = require('../models/Swap');

// Propose a swap
exports.proposeSwap = async (req, res) => {
    const { receiverId } = req.body;
    const swap = new Swap({ proposer: req.user.id, receiver: receiverId });
    
    try {
        await swap.save();
        res.status(201).json({ message: "Swap proposed!" });
    } catch (error) {
        res.status(400).json({ error: "Error proposing swap." });
    }
};

// Get swaps for a user
exports.getUserSwaps = async (req, res) => {
    const swaps = await Swap.find({
        $or: [{ proposer: req.user.id }, { receiver: req.user.id }]
    }).populate('proposer receiver');
    res.json(swaps);
};

// Update swap status
exports.updateSwapStatus = async (req, res) => {
    const { status } = req.body;
    try {
        const swap = await Swap.findById(req.params.id);
        if (!swap || (swap.proposer.toString() !== req.user.id && swap.receiver.toString() !== req.user.id)) {
            return res.status(403).json({ message: "Unauthorized." });
        }
        swap.status = status;
        await swap.save();
        res.json(swap);
    } catch (error) {
        res.status(400).json({ error: "Error updating swap." });
    }
};