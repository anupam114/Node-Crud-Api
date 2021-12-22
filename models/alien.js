const mongoose = require('mongoose');

const allienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Alien', allienSchema);