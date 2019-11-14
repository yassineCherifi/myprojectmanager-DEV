const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    issues: [{
        type: Schema.Types.ObjectId,
        ref: 'Issue'
    }],
});


mongoose.model('Sprint', sprintSchema);