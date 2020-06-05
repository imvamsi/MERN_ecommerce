const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }, 
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    quantity: {
        type: Number
    }, 
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    shipping: {
        required: false,
        type: Boolean
    }
});
module.exports = mongoose.model('Product', productSchema);