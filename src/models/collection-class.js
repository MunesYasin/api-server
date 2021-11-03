



class Collection {
    constructor(model){
        this.model=model
    }
    
    
    
    
    
    async read(id){
        try{
        if(id){
           const getModel = await this.model.findOne({where:{id}})
           return getModel
        }
        else{
           const getAllModel = await this.model.findAll()
           return getAllModel
        }
    }catch{
        console.error("there is error")
    }
    }
    
    async create(obj){
        const newObj = await this.model.create(obj)
        return newObj
    }
    
    async update(obj,id){
        const foundId =await this.model.findOne({where:{id}})
    const updated = await foundId.update(obj)
    return updated
    }
    
    
    async delete(id){
        const deleted = await this.model.destroy({where:{id}})
        return deleted
    }
    
    
    
    }
    module.exports=Collection