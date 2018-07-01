let mongoose = require('mongoose');

const schema = new mongoose.Schema({
name: {
required: true,
type: String
 },
occupation: {
required: true,
type: String
},
avatar: {
required: true,
type: String
},
});

module.exports =  schema;