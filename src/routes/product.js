const express = require('express');
const productController = require('../App/Controller/ProductController');
const router = express.Router();

router.post('/createPost',productController.createPost);
router.get('/:id/edit',productController.editPost);
router.delete('/:id',productController.deletePost);
router.put('/:id',productController.updatePost);

module.exports = router;