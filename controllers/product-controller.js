const Product = require('../models/Product');
const CustomAPIError = require('../errors/')
const { StatusCodes } = require('http-status-codes');


const getProducts = async(req,res)=>{
    const products = await Product.find({})
    res.status(StatusCodes.OK).json({status:"Success",msg:'Hello World from Get Product',products:products});
}


const getProductDetails= async(req,res)=>{
    const product = await Product.find({_id:req.params.id});
    if(!product){
        throw new CustomAPIError.NotFoundError(`Product with ${req.params.id} not found!`);
    }
    res.status(StatusCodes.OK).json({status:"Success",msg:'Hello World from Post Product'})
}

const createProduct = async(req,res)=>{
    const product = await Product.create(req.body)
    res.status(200).json({msg:'Hello World!',product:product})
}

const updateProduct = async(req,res)=>{
    
    res.status(200).json({status:"Success",msg:'Hello World from Update Product'})

}

const deleteProduct = async(req,res)=>{
    res.status(200).json({status:"Success",msg:'Hello World from Delete Product'})
}

const uploadProductImage = async(req,res)=>{
    res.send("Upload Image")
}

module.exports={
    getProducts,
    getProductDetails,
    createProduct,
    updateProduct,
    deleteProduct,
    updateProduct,
    uploadProductImage
}