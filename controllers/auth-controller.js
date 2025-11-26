const UserSchema = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require("../errors")
const {createJwt, isTokenValid} = require('../utils')

const register = async(req,res)=>{
    const {email,name,password} = req.body
    const emailAlreadyExits = await UserSchema.findOne({email})

    if(emailAlreadyExits){
        throw new CustomAPIError.BadRequestError("Email Already Exists")
    }

    const user = await UserSchema.create({name, email,password})
    const tokenUser = {user: name, user_id:user._id}
    const token = createJwt({payload: tokenUser})
    res.status(StatusCodes.OK).json({msg:'Success',user:user,token:token})
}


const login = async(req,res)=>{
    res.status(200).json({msg:'Hello World from Login'})
}

const logout = async(req,res)=>{
    res.status(200).json({msg:'Hello World From Logging Out!'})
}


module.exports = {register, login, logout}