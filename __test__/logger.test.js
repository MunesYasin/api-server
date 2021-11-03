'use strict'

const loggerMiddleWare = require('../src/middleware/logger')

describe('LOgger Middleware',()=>{
    let consoleSpy;
let req={}
let res={}
let next = jest.fn()

beforeEach(()=>{


    consoleSpy = jest.spyOn(console,'log').mockImplementation();
})

afterEach(()=>{

consoleSpy.mockRestore();
})

test('properly logs some output',()=>{
loggerMiddleWare(req,res,next)
expect(consoleSpy).toHaveBeenCalled()
})

test('check if properly moved to the next middleware',()=>{
    loggerMiddleWare(req,res,next)
    expect(next).toHaveBeenCalled()  
})


})