'use strict'


const Clothes = (sequelize , DataTypes)=>sequelize.define('Clothes',{
    
        nameOfClothes:
        {
            type : DataTypes.STRING ,
            allowNull : false 
        },
        sizeOfClothes: 
        {
            type : DataTypes.INTEGER
        }
    })


module.exports=Clothes