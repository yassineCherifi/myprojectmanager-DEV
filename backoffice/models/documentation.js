const mongoose = require('mongoose');

const documentationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String
    }
   

});


module.exports = mongoose.model('Documentation', documentationSchema);
