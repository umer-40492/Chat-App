const express = require("express");
const cors = require("cors");
require('dotenv').config(); 
const connectDB = require("./config/connectdb");
const router = require("./routes/index")
// const app = express();
const cookiesParser = require("cookie-parser");
const {app, server} = require("./socket/index")
app.use(cors({
    origin: process.env.FRONTEND_URL, // Allow the frontend URL
    credentials: true, // Allow cookies and authorization headers
}));
const port = process.env.PORT || 8080;
app.get('/', (req, res)=>{
    res.json({
        message: "server running at " + port
    })
})
app.use(express.json())
app.use(cookiesParser());
// api endpoints
app.use('/api', router);
connectDB().then(()=>{
    server.listen(port, (()=>{
        console.log('server running connect', port);
    }))
})
// app.listen(port, (()=>{
//     console.log('server running', port);
// }))