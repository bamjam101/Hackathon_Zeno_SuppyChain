const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unnamedSchema = new Schema({
    
}, {timestamps:true});

const Healthcare = mongoose.model('Healthcare', unnamedSchema);

module.exports = Question;