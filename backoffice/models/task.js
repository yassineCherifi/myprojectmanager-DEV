const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    idIssues:[{
        type: String
    }],
    description: {
        type: String,
        required: true
    },
    cout: {
        type: String
    },
    developer: {
        type: String
    }

});


mongoose.model('Task', taskSchema);