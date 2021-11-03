'use strict'

const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT
const notFound = require('../src/error-handlers/404')
const not500 = require('../src/error-handlers/500')

const logger = require('../src/middleware/logger')
const clothes = require('./routes/clothes')
const food = require('./routes/food')
app.use(logger)
app.use(express.json());

app.use(clothes)
app.use(food)





app.use('*', notFound)
app.use(not500)



function start(){
app.listen(PORT,()=>{
    console.log('SERVER STARTED')
})}

module.exports={
    app,
    start,
};