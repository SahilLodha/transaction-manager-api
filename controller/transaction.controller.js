const TransactionModel = require('../models/transaction.model');

// Creates a new Transaction
exports.createTransactions = async (req, res) => {
   try{
       await TransactionModel.create(req.body)
       res.status(200).json({
           success: true,
           message: "Transaction Added"
       });
   }catch (e) {
       res.status(400).json({
           success: false,
           message: "Transaction Added"
       })
   }
}

// Updating a Transaction ....
exports.deleteTransaction = async (req, res) => {
    try{
        await TransactionModel.deleteOne({_id: req.params.id})
        res.status(200).json({
            success: true,
            message: 'Delete Success'
        })
    }catch (e){
        res.status(400).json({
            success:false,
            message: "Delete Operation Failed"
        })
    }
}

// Deleting a Transaction ....
exports.updateTransactions = async (req, res) => {
    try {
        const update_trans = await TransactionModel.findOne({_id: req.params.id})
        await TransactionModel.updateOne({_id: update_trans._id},{
            $set: req.body
        })
        res.status(200).json({
            success: true,
            message: "Updated Transaction"
        })
    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

exports.listTransaction = async function(req, res){
    try{
        const data = await TransactionModel.find({}).populate('category')
        res.status(200).json({
            success: true,
            data: data
        })
    }catch (e) {
        res.status(400).json({
            success: false,
            data: [],
            message: "Data Fetch Failed."
        })
    }
}

exports.listOne = async (req, res)=>{
    try{
        let data = await TransactionModel.findOne({_id: req.params.id})
        res.status(200).json({
            success: true,
            data: data,
            message: "Data Sent"
        })
    }catch (e) {
        res.status(400).json({
            success: false,
            data: null,
            message: e.message
        })
    }
}