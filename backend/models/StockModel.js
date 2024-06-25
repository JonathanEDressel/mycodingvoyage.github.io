const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockSchema = new Schema({
    name: {
        type: String,
        unique: true,
        dropDups: true,
        required: true
    },
    shares: {
        type: Number,
        required: false,
        default: 0
    },
    investment_amount: {
        type: Number,
        required: false,
        default: 0
    }
}, { timestamp: true });

module.exports = mongoose.model('Stock', stockSchema);