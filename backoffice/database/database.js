const mongoose = require('mongoose');
require('../models/user');
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/cdp2019';
mongoose.connect(MONGO_URL,{ useNewUrlParser: true , useUnifiedTopology: true}, (err) => {
    if(!err) {
        console.log('Base de données connectée');
    }
    else {
        console.log('Base de données non connectée' + JSON.stringify(err,undefined,2));
        process.exit(1);
    }
});
