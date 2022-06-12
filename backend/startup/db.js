const config = require("config")
const mongoose = require("mongoose")

module.exports = function(){
    let db = config.get("db") 
    if(process.env.NODE_ENV === "production")
        db = process.env.MONGODB_URI

    mongoose.connect(db)
            .then(() => console.log("connecting to " + db))
            .catch((error) => console.error(error))
            
}

