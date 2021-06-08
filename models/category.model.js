const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {type: String, required:true, unique:true},
    description: {type: String, required: false, max: 3000},
},{
    collection: 'Categories',
    timestamps: false
})

module.exports = mongoose.model('Categories', categorySchema);
