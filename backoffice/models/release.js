const mongoose = require('mongoose');

const releaseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    version: {
        type: String
    },
    date: {
        type: String
    },
    sprintNumber: {
        type: String
    },
    link: {
        type: String
    }

});


module.exports = mongoose.model('Release', releaseSchema);
