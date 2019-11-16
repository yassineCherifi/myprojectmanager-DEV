const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Le titre est obligatoire',
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    contributors: [{
        type: Schema.Types.ObjectId,
        ref: 'User' }],
    status: {
        type: String,
        default: 'En cours' },
    issues: [{
        type: Schema.Types.ObjectId,
        ref: 'Issue' }],
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task' }],
    sprints: [{
        type: Schema.Types.ObjectId,
        ref: 'Sprint' }],
    tests: [{
        type: Schema.Types.ObjectId,
        ref: 'Test' }]
});


mongoose.model('Project', projectSchema);
