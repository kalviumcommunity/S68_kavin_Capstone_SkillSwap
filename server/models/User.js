const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    avatarURL: { type: String },
    skillsOffered: [String],
    skillsWanted: [String],
});

module.exports = mongoose.model('User', userSchema);