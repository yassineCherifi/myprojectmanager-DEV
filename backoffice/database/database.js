const mongoose = require('mongoose');
require('../models/user');

mongoose.connect(process.env.MONGOPROD || process.env.MONGODB_URI,{ useNewUrlParser: true , useUnifiedTopology: true}, (err) => {
    console.log(process.env.MONGOPROD || process.env.MONGODB_URI);
    if(!err) {
        console.log('Base de données connectée');
    }
    else {
        console.log('Base de données non connectée' + JSON.stringify(err,undefined,2));
        process.exit(1);
    }
});
