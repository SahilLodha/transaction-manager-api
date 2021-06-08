const express = require('express')
const router = express.Router();
const categoryController = require('../controller/category.controller')
const categoryMiddleware = require('../middlewares/categoryMiddlewares/categories.middleware')

router.get('/', categoryController.getCategories)
router.put('/:id', categoryMiddleware.existenceMiddleware, categoryController.updateCategory)
router.post('/', categoryController.createCategory)
router.post('/:id', categoryMiddleware.existenceMiddleware, categoryController.getCategory)
router.delete('/:id', categoryMiddleware.checkTransaction, categoryMiddleware.existenceMiddleware, categoryController.removeCategory)

module.exports = router;