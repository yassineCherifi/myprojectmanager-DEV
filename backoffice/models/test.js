const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    date: {
        type: String
    },
    link: {
        type: String
    },
    status: {
        type: String
    }
});


module.exports = mongoose.model('Test', testSchema);
