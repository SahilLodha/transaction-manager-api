const TransactionModel = require('../../models/transaction.model')
const CategoriesModel = require('../../models/category.model')

exports.checkTransaction = async (req, res, next) => {
    try {
        const transactions = await TransactionModel.find({category: req.params.id})
        console.log(transactions)
        if (transactions.length === 0) {
            next()
        } else {
            return res.status(400).json({
                success: false,
                message: "Transaction Exist for Category!"
            })
        }
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

exports.existenceMiddleware = async (req, res, next) => {
    try {
        const updateList = await CategoriesModel.find({_id: req.params.id})
        console.log(updateList)
        if (updateList.length) {
            next();
        } else {
            res.status(400).json({
                success: true,
                message: "The id is invalid."
            })
        }
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}