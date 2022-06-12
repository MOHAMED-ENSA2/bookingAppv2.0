const express = require("express")
const Joi = require("joi")
const {compare} = require("../utils/passwordEcncypting")

const router = express.Router()

const {User} = require("../models/users")

router.post("/login" , async (req, res) => {
    const loginData = req.body 
    // validate user inputs
    const validatorErrors = authValidator(loginData)
    if(validatorErrors) return  res.status(400).send(validatorErrors.details[0].message)
    // check if a user with giving email  exists
    const user = await User.findOne({email : loginData.email})
    if(!user) return res.status(400).send("password incorrect!")
    // compare the user password to the hashed password stored in the db 
    const comparePasswords = await compare(loginData.password , user.password)
    if(!comparePasswords) 
        return res.status(400).send("password incorrect!")
    
    const token = user.generatejwt()
    res.header("x-auth-token", token).send(token)

})

// check email existance 
router.post("/emailExists" , async (req,res) => {
    const userData = req.body  
    // validate user inputs
    const validatorErrors = emailValidator(userData)
    if(validatorErrors) return  res.status(400).send(validatorErrors.details[0].message)
    const user = await User.findOne({email : userData.email})
    if(!user) return res.send(false) 
    res.send(true)
})

// Login validator
const authValidator = (user) => {
    const schema = Joi.object({

        email : Joi.string().email().required().min(5).max(255),
        password : Joi.string().required().min(5).max(1024)

    })

    return schema.validate(user).error
}

// email validator 

const emailValidator = (email) => {
    const schema = Joi.object({
        email : Joi.string().email().required().min(5).max(255),
    })
    return schema.validate(email).error
}



module.exports = router