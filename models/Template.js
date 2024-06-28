const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("Template", templateSchema);
