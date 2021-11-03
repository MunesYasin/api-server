'use strict'


const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL

const {Sequelize,DataTypes}= require('sequelize')

let sequelizeOption = process.env.NODE_ENV === 'production '? {
dialectOptions :{
    ssl :{
        require : true ,
        rejectUnauthorized : false,
    }
}
} :{}


 const clothes = require('./clothes')
 const food = require ('./food')

let sequelize = new Sequelize(POSTGRES_URI,sequelizeOption)
 const clothesModel = clothes(sequelize,DataTypes);
 const foodModel = food(sequelize,DataTypes);


 const Collection = require('./collection-class')

    const clothesCollection = new Collection(clothesModel)
    const foodCollection = new Collection(foodModel)


module.exports = {
    db:sequelize,
    clothesCollection : clothesCollection,
    foodCollection : foodCollection
}