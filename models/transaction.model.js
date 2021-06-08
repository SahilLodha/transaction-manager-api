const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CategorySchema = require('./category.model')

const transactionModel = new Schema({
    amount: {type: Number, required: [true, 'Enter the amount Expended.']},
    details: {type:String,required:false, unique:false},
    isExpense: {type: Boolean, default:true, required:true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: CategorySchema, required: [true, "Transaction always Belongs to a Category."]},
}, {
    collection: 'Transactions',
    timestamps: true
})


module.exports = mongoose.model('Transactions', transactionModel);