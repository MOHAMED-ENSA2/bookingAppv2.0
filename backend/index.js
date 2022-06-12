const app = require("express")()
require("./startup/routes")(app)
require("./startup/db")()


const port = process.env.PORT || 3001
app.listen(port , () => console.log("Running on port " + port));

