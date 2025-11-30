const express = require('express');
const router = express.Router();
const {  getProducts,
    createProduct,
    getProductDetails,
    updateProduct,
    deleteProduct,
    uploadProductImage} = require('../controllers/product-controller');

const {authenticationMiddleware, authorizePermission} = require('../middlewares/authentication');

router.get('/',[authenticationMiddleware,authorizePermission('admin','owner')],createProduct);
router.post('/',getProducts);
router.get('/:id',getProductDetails);
router.patch('/updateProduct',[authenticationMiddleware,authorizePermission('admin')],updateProduct);
router.delete('/deleteProduct',[authenticationMiddleware,authorizePermission('admin')],deleteProduct);
router.post('/uploadImage',[authenticationMiddleware,authorizePermission('admin')], uploadProductImage)

module.exports = router