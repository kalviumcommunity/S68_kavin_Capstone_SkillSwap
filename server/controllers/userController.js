const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
    const { skill } = req.query; // Filtering logic
    const users = skill 
        ? await User.find({ skillsOffered: { $in: [skill] } }).select('-password') 
        : await User.find().select('-password');
    
    res.json(users);
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (user) return res.json(user);
        res.status(404).json({ message: "User not found." });
    } catch (error) {
        res.status(500).json({ error: "Error fetching user." });
    }
};