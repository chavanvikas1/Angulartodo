const express=require("express")

const { createState, getstate, deletedata, updatestate, getid } = require("../controller/statecontroller")
const router=express.Router()

router.route("/statepost").post(createState)
router.route("/stateget").get(getstate)
router.route("/deletedata/:id").delete(deletedata)
router.route("/updatestate/:id").put(updatestate)
router.route("/getid/:id").get(getid)
module.exports=router