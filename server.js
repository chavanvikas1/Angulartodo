const express = require('express')
const db = require('./config/db')
const app = express()
require("dotenv").config({path:'./config/.env'})
const cors=require("cors")
const user=require("./routes/userroute") 
const state=require("./routes/stateroute") 
const city=require("./routes/cityRoutes") 

db()
app.use(express.static("public"))
app.use(express.json())
app.use(cors())
app.use("/api/v1",user)
app.use("/api/v1",state)
app.use("/api/v1",city)


const {PORT}=process.env
app.listen(PORT ,()=> console.log(`http://localhost:${PORT}`))