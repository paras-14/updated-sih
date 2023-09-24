const {userAuthModel} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes');

const signup = async (req, res) => {
  const { username, email, password } = req.body
  
  // console.log(username);
  const encryptedPassword = await bcrypt.hash(password, 10)
  try {
    const oldUser = await userAuthModel.find({ email })
    if (oldUser.length != 0) {
      return res.send({data : "User Already Exists"})
    }
    const register = await userAuthModel.create({
      username,
      email,
      password: encryptedPassword,
    })
    res.json({
      status: "ok",
      data: register ,
    })
  } catch (error) {
    res.json({
      error: error,
    })
  }


}

const login = async (req, res) => {
  const { email, password } = req.body
  const oldUser = await userAuthModel.findOne({ email })
  if (!oldUser) {
    return res.json({
      error: 'User Not Found',
    })
  }
 
  if (await bcrypt.compare(password, oldUser.password)) {
    const token = jwt.sign({email : oldUser.email, username : oldUser.username}, process.env.JWT_SECRET)
    if (res.status(201)) {
      return res.json({ status:"ok", data: token })
    } else {
      return res.json({ error: 'error' })
    }
  }
  res.json({ error: 'Invalid Password' })

}



module.exports = { signup, login }