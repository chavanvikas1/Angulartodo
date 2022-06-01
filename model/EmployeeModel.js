const mongoose=require("mongoose")

const Schema= mongoose.Schema({
    Country:{
        type:String,
        required:true,
    },
    
   
},{timestamps:true})
module.exports=mongoose.model("employee",Schema)