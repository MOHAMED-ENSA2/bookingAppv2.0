const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    name : {
        type : String , 
        required : true 
    } , 
    image : [String] , 
    details : {
        type : String , 
        maxlength : 1024 
    },
    rooms : {
        type : Number
    } ,

    price : {
        type : Number
    }, 
    rating : {
        type : Number , 
        min : 0 , 
        max : 10 
    }   ,
    Comment : {
        type : String , 
        maxlength : 1024 
    } ,
    description : {
        type : String , 
        maxlength : 1024 
    } ,
    placed_at : {
        type : Date , 
        default : Date.now,
    }

})



module.exports = mongoose.model("Hotel" , schema)