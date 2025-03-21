const express = require("express");
const userRoute = express.Router();


userRoute.get("/Users-detail" , (req , res) => {
    res.send('This contains the detail of the user')
})


module.exports = userRoute