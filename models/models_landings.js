const mongoose = require('mongoose');

const itemSchema = {
    name: {
        type: String
    },
    id: {
        type: String
    },
    nametype:{
        type: String
    },
    recclass: {
        type: String
    },
    mass: {
        type: Number
    },
    fall: {
        type: String
    },
    year: {
        type: String
    },
    reclat: {
        type: String
    },
    reclong: {
        type: String
    },
    geolocation: {
        latitude: {
            type: String
        },
        longitude: {
            type: String
        },
    }
}

const landingSchema = mongoose.Schema(itemSchema);
const Landing = mongoose.model('landings', landingSchema);
module.exports = Landing;