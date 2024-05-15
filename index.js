// 1  Loads .env file contacts into process.env by default
require('dotenv').config()

const https = require('https');
const fs = require('fs');
const applicationMiddleware = require('./Middlewares/applicationMiddleware');

//2 import express
const express = require('express')

//3 import cors
const cors = require('cors')

//4 import db
const db = require('./DB/connection')


//5 import router
const router = require('./Routes/router')

//6 create an applicication using express
const mbServer = express()

//7 use 
mbServer.use(cors());
mbServer.use(express.json())

//8 
mbServer.use(applicationMiddleware)
mbServer.use(router)

//9 port creation 
const PORT = 5000 || process.env.PORT

//10
mbServer.listen(PORT, () => {
    console.log("lrServer listening on the port " + PORT);
})

mbServer.get('/', (req, res) => {
    res.send("Welcome to Login Register Validation System")
})


const app = express();


