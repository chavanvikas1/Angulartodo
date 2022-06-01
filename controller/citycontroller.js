const city = require("../model/CityModel")

exports.createcity=async(req,res)=>{
    try {
        const result=await city.create(req.body)
        res.json({
            success:true,
            message:"city created",
            data:result,
        })

    } catch (error) {
        res.json({
            success:false,
            message:"city not created",
            error
        })

        
    }
}
exports.getcity=async(req,res)=>{
    try {
        const result =await city.find()
        res.json({
            success:true,
            message:"city find",
            data:result
        })

    } catch (error) {
        res.json({
            success:false,
            message:"city not find",
            error
        })
    }
}
exports.updatecity=async(req,res)=>{
    try {
        const result =await city.findByIdAndUpdate(req.params.id,req.body,{new:true})
        console.log(result);
        console.log('*****');
        res.json({
            success:true,
            message:"city updated",
            data:result
        })

    } catch (error) {
        res.json({
            success:false,
            message:"city not updated",
            error
        })
    }
}



exports.findid=async(req,res)=>{
    try {
        const result =await city.findById(req.params.id)
        res.json({
            success:true,
            message:"city find",
            data:result
        })

    } catch (error) {
        res.json({
            success:false,
            message:"city not find",
            error
        })
    }
}
exports.deletecity=async(req,res)=>{
    try {
        const result =await city.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"city deleted",
            data:result
        })

    } catch (error) {
        res.json({
            success:false,
            message:"city not deleted",
            error
        })
    }
}