const mongoose = require('mongoose');

const sprintSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    startDate: { 
        type: String
    },
    endDate: { 
        type: String
    },
    status: { 
        type: String
    },
    issues:[{
        type: String
    }]
});


mongoose.model('Sprint', sprintSchema);