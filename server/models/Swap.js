const mongoose = require('mongoose');

const swapSchema = new mongoose.Schema({
    proposer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, default: 'pending' }, // 'pending', 'accepted', 'rejected'
});

module.exports = mongoose.model('Swap', swapSchema);