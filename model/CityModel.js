const mongoose =require("mongoose")

const Schema= mongoose.Schema({
    city:{
        type:String,
        required:true,
    },
    state1:{
        type:String,
        required:true,
    },
    country1:{
        type:String,
        required:true,
    },
    
})
module.exports=mongoose.model("city",Schema)