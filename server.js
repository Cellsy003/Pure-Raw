const express = require("express");
const server = express();
const userRoute = require("./Routers/usersRoute");

server.use(userRoute);

server.get('/' , (req, res) => {
    res.send('This is from my head')
});

server.get("/About" , (req , res) => {
    res.send('This contains the things about me.')
});

server.get("/Home/About" , (req , res) => {
    res.send("This is actually my home page")
});


server.listen(3000, () => {
    console.log('Server is running');
    
})
