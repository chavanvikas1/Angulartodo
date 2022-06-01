const employee =require("../model/EmployeeModel")

exports.createemployee=async(req,res)=>{
    try {
        const result = await employee.create(req.body)
        res.json({
            count:result.length,
            message:"employee created",
            success:true,
            result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"employee not created"+error,
           
        })
    }
}
exports.getemployee=async(req,res)=>{
    try {
        const result = await employee.find()
        res.json({
            count:result.length,
            message:"employee found",
            success:true,
           data: result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"employee not found"+error,
           
        })
    }
}
exports.updatedata=async(req,res)=>{
    try {
        const result = await employee.findByIdAndUpdate(req.params.id,req.body)
        res.json({
            count:result.length,
            message:"employee updated",
            success:true,
           data: result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"employee not updated"+error,
           
        })
    }
}
exports.deleteemployee=async(req,res)=>{
    try {
        const result = await employee.findByIdAndDelete(req.params.id)
        res.json({
            count:result.length,
            message:"employee deleted",
            success:true,
           data: result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"employee not deleted"+error,
           
        })
    }
}
exports.getemployeebyid=async(req,res)=>{
    try {
        const result = await employee.findById(req.params.id)
        res.json({
            count:result.length,
            message:"employee found",
            success:true,
           data: result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"employee not found"+error,
           
        })
    }
}