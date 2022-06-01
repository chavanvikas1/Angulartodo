
const Mongoose =require('mongoose')

const db = async()=>{
try {
    await Mongoose.connect(process.env.MONGODB_URL)
    console.log("DB CONNECTED");
} catch (error) {
    console.log("DB NOT CONNECTED");
    process.exit()
    
}
}
module.exports=db;
