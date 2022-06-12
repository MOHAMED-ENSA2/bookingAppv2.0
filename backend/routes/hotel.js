const router = require("express").Router()
const Hotel = require("../models/hotel")

router.get("" , async(req, res, next) => {
    const hotels = await Hotel.find() 
    if(!hotels) 
        res.status(404).send("there is no hotels in the db")
    res.send(hotels)
})


router.get("/:id" , async (req, res) => {
    const id = req.params.id

    const hotel = await Hotel.findById(id)
    if(!hotel) 
        return res.status(400).send("no hotel with the giving id")
    return res.send(hotel) 
})


router.post("/addHotel" , async (req, res) => {
    const userData = req.body

    try{
        const hotel = await  new Hotel(userData)
        hotel.save()
        res.send(" product added successfuly!")
    }
    catch(ex){
        res.status(500).send(ex)
    }

})

router.delete("/removeHotel/:id" , async (req,res,next) => {
    try{
        await Hotel.deleteOne({ _id : req.params.id})
        res.send("product deleted successfuly")
    }
    catch(ex) {
        res.status(500).send(ex)
    }

})

router.put("/updateHotel/:id" , async (req,res,next) => {
    try{
        const hotel = await Hotel.findByIdAndUpdate(req.params.id , req.body)
        if(!hotel)
            return res.status(404).send("no product for the giving id")
        res.send("updated successfuly!")
    }
    catch(ex){
        res.status(500).send(ex)
    }
})


module.exports = router