const CategoryModel = require('../models/category.model')

// Create new Categories
exports.createCategory = async (req, res) => {
    try{
        await CategoryModel.create(req.body)
        res.status(200).json({
            success: true,
            message: "Category Created"
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: 'Category addition Failed'
        })
    }
}

exports.getCategory = async (req, res)=>{
    try{
        const data = await CategoryModel.findOne({_id: req.params.id})
        res.status(200).json({
            success: true,
            data: data,
            message: "Details Sent"
        })
    }catch (e) {
        res.status(400).json({
            success: false,
            data: null,
            message: "Failed to get Value"
        })
    }
}

// Remove categories ....
exports.removeCategory = async (req, res) => {
    try {
        await CategoryModel.deleteOne({_id: req.params.id})
        res.status(200).json({
            success: true,
            message: "Deleted"
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: "Delete Failed"
        })
    }
}

// Updating categories ....
exports.updateCategory = async (req, res) => {
    try {
        const update_category = await CategoryModel.findOne({_id: req.params.id})
        await CategoryModel.updateOne({_id: update_category._id},{
            $set: req.body
        })
        res.status(200).json({
            success: true,
            message: "Updated"
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: "Update Failed"
        })
    }
}

// Getting all categories ....
exports.getCategories = async function(req, res){
    try{
        const data = await CategoryModel.find({})
        res.status(200).json({
            success: true,
            data: data,
            message: "Fetch Success."
        })
    }catch (e) {
        res.status(400).json({
            success: false,
            data: [],
            message: "Data Fetch Failed."
        })
    }
} 

