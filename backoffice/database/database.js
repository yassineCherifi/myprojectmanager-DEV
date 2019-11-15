const mongoose = require('mongoose');
const user = require('../models/user')

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true , useUnifiedTopology: true}, (err) => {
    if(!err) {
        console.log("Base de données connectée");
    }
    else {
        console.log("Base de données non connectée" + JSON.stringify(err,undefined,2));
        process.exit(1);
    }
});
