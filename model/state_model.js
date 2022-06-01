const mongoose=require("mongoose")

const stateSchema=mongoose.Schema({
    state:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
  

},{timestamps:true})
module.exports=mongoose.model("state",stateSchema)