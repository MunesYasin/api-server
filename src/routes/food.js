'use strict'


const express = require('express')
const {foodCollection} = require('../models/index')
const foodRouter = express.Router()


foodRouter.get('/food' , getfood)
foodRouter.get('/food/:id' , getOnefood)
foodRouter.post('/food' , createfood)
foodRouter.put('/food/:id' , updatefood)
foodRouter.delete('/food/:id' , deletefood)

async function getfood(req,res){
    const allfood = await foodCollection.read()
    res.status(200).json(allfood)
    }
    
    async function getOnefood(req,res){
        const id = req.params.id
        const food = await foodCollection.read(id)
        
        res.status(200).json(food)
    }
    
    async function createfood(req,res){
        const newfood = req.body
        const newfoodAdded = await foodCollection.create(newfood);
        res.status(201).json(newfoodAdded)
    }
    
    async function updatefood(req,res){
        const id =req.params.id
        const obj = req.body 
        const updatedfood = await foodCollection.update(obj,id)
        res.status(201).json(updatedfood)
    }
    
    async function deletefood(req,res){
        const id = req.params.id 
        const deletedfood = await foodCollection.delete(id)
        res.status(204).json(deletedfood)
    }

module.exports=foodRouter