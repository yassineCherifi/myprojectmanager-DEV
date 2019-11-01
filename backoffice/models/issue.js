const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    priorite: { 
        type: String
    },
    difficulte: { 
        type: String
    },
    status: { 
        type: String
    },

});


mongoose.model('Issue', issueSchema);