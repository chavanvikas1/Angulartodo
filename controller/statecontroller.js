const state=require("../model/state_model")

exports.createState=async(req,res)=>{
    try {
        const result=await state.create(req.body)
        res.json({
            success:true,
            message:"state created",
            data:result,
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:"state not created",
            error
        })
        
    }
   
}
exports.getstate=async(req,res)=>{
    try {
        const result =await state.find()
        res.json({
            success:true,
            message:"state find",
            data:result
        })

    } catch (error) {
        res.json({
            success:false,
            message:"state not find",
            error
        })
    }
}
exports.deletedata=async(req,res)=>{
    try {
        const result =await state.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"state deleted",
            data:result
        })

    } catch (error) {
        res.json({
            success:false,
            message:"state not deleted",
            error
        })
    }
}
exports.updatestate=async(req,res)=>{
    try {
        const result =await state.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            success:true,
            message:"state updated",
            data:result
        })

    } catch (error) {
        res.json({
            success:false,
            message:"state not updated",
            error
        })
        
    }
}
exports.getid=async(req,res)=>{
    try {
        const result =await state.findById(req.params.id)
        res.json({
            success:true,
            message:"state find by id",
            data:result
        })

    } catch (error) {
        res.json({
            success:false,
            message:"state not find by id",
            error
        })
    }
}
