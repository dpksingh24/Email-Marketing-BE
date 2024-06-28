const Template = require('../models/Template');

// @desc    Create a new template
// @route   POST /api/templates
// @access  Private (assuming authenticated users)

exports.createTemplate = async(req, res) => {
    const  { content } = req.body;

    console.log(req.body)
    // Check if req.user is defined
    if (!req.user || !req.user._id) {
        return res.status(401).json({ error: 'User not authenticated' });
    }

    const createdBy = req.user._id;
    try {
        const newTemplate = new Template({ content, createdBy });
        await newTemplate.save();
        res.status(201).json(newTemplate);
    } catch (error) {
        console.error('Error saving template:', error.message);
        res.status(500).json(error.message);
    }
}
