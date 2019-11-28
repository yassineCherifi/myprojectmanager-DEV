const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const invitationSchema = new mongoose.Schema({
    emailUser: {
        type: String,
        required: 'l\'email est obligatoire',
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
   
    date: {
        type: String,
    },
    status: {
        type: Number,
        default: 0
    },
});

invitationSchema.index({ emailUser: 1, project: 1}, { unique: true });

module.exports = mongoose.model('Invitation', invitationSchema);
