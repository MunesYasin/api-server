'use strict'


const Food = (sequelize , DataTypes)=>sequelize.define('Food',{
    
        nameOfFood:
        {
            type : DataTypes.STRING ,
            allowNull : false 
        },
        quantityOfFood: 
        {
            type : DataTypes.INTEGER
        }
    })


module.exports=Food