'use strict'


const {app} = require('../src/server')
const supertest = require('supertest')
const request = supertest(app)
const {db}=require('../src/models/index')



beforeAll(async ()=>{
        await db.sync();
    })


    afterAll(async()=>{
        await db.drop();
    })


describe('API Server Testing',()=>{
    test('handle invalid url', async ()=>{
       const response = await request.get('/not-found')
       expect(response.status).toEqual(404)
    })


    test('can add food',async()=>{
        const response = await request.post('/food').send({
            nameOfFood : 'shawerma',
            quantityOfFood : 5
        });
        expect(response.status).toBe(201)
    })
    
    
    test('can get all food',async()=>{
        const response = await request.get('/food')
        expect(response.status).toBe(200)
    })


    test('can get  one food',async()=>{

        const response = await request.get('/food/1')
        expect(response.status).toBe(200)
    })
    

    test('can update food',async()=>{
        const response = await request.put('/food/1').send({
            nameOfFood : 'flafel',
            quantityOfFood : 10
        });
        expect(response.status).toBe(201)
    })
     test('can delete  food',async()=>{
       
        const response = await request.delete('/food/1')
        expect(response.status).toBe(204)
    })
})