const UserSchema = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require("../errors")

const register = async(req,res)=>{
    const {email,name,password} = req.body
    const emailAlreadyExits = await UserSchema.findOne({email})

    if(emailAlreadyExits){
        throw new CustomAPIError.BadRequestError("Email Already Exists")
    }

    const user = await UserSchema.create({name, email,password})
    res.status(StatusCodes.OK).json({msg:'Success',user:user})
}


const login = async(req,res)=>{
    res.status(200).json({msg:'Hello World from Login'})
}

const logout = async(req,res)=>{
    res.status(200).json({msg:'Hello World From Logging Out!'})
}


module.exports = {register, login, logout}