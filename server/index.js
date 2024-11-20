const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectdb");
const router = require("./routes/index")
const app = express();
const cookiesParser = require("cookie-parser");
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

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
    app.listen(port, (()=>{
        console.log('server running connect', port);
    }))
})
// app.listen(port, (()=>{
//     console.log('server running', port);
// }))