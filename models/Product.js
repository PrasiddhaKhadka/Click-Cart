const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title:{
        type: String,
        required:[true,'Product name must be provided'],
        maxlength: [100, 'Name can not be more than 100 characters']
    },
     price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0,
    },
    slug:{
        type: String,
        unique: true

    },
    desc:{
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    }
})