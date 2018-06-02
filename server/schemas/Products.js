let mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
    required: true,
    type: String
     },
    description: {
    required: true,
    type: String
    },
    reviews: {
    required: true,
    type: Number
    },
    rating: {
    required: true,
    type: Number
    },
    imgUrl: {
    required: true,
    type: String
    },
    price: {
    required: true,
    type: String
    }
});

module.exports = schema;