const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
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
    }

});


mongoose.model('Issue', issueSchema);