const express = require("express")
const cors = require("cors")

const authRouter = require("../routes/auth")
const usersRouter = require("../routes/users")
const hotelRouter = require("../routes/hotel")

module.exports = function(app){
    app.use(express.json())
    app.use(cors())
    app.use("/api/auth" , authRouter)
    app.use("/api/users" , usersRouter)
    app.use("/api/hotels" , hotelRouter)
}

