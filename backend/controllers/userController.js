const User = require('../models/userModel')

const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id},process.env.SECRET,{expiresIn:'7d'})
}

// login a user
const loginUser = async (req, res) => {
  const {email,password} = req.body
  try{
    const user = await User.login(email,password)
      // CREATE_TOKEN
      const token = createToken(user._id);
      
      res.status(200).json({email , token})
      console.log(user._id)

  }catch(error){
   res.status(400).json({error:error.message})
  }
}

// signup a user
const signupUser = async function(req, res){
  const {email,password} = req.body
  try{
    const user = await User.signup(email,password)
      // CREATE_TOKEN
      const token = createToken(user._id);


    res.status(200).json({email , token})
    console.log(user._id)
  }
  catch(err){
    res.status(400).json({error:err.message})
  }
}

module.exports = { signupUser, loginUser }