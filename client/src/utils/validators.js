import Joi from "joi-browser" 

export const validateEmail = (email) => {

    const schema = Joi.object({
        email: Joi.string()
            .email()
            .min(5)
            .max(30)
            .required()
    })
    
    return schema.validate({email : email})
    
}

export const validatePassword = (password) => {

    const schema = Joi.object({
        password: Joi.string().min(5).max(30).required()
    })
    
    return schema.validate({password : password})
    
}
