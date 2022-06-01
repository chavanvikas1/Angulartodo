const user=require("../model/usermodel")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.createuser=async(req,res)=>{
    try {
        const salt =await bcrypt.genSalt(10)
        req.body.password=await bcrypt.hash(req.body.password,salt)
        const result = await user.create(req.body)
        res.json({
            count:result.length,
            message:"user created",
            success:true,
            result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"user not created"+error,

        })
    }
}

