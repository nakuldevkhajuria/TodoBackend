const userModel = require('../models/UserModel')

const createUser =async(req,res)=>{
const email = req.body.email;
console.log(email)
}

module.exports ={createUser}