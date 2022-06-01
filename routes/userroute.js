const express=require("express")
const login = require("../controller/authcontroller")
const { createemployee, getemployee, updatedata, deleteemployee, getemployeebyid } = require("../controller/emplyeeController")
const { createuser } = require("../controller/userController")
const router=express.Router()

router.route("/ragister").post(createuser)
router.route("/login").post(login)
router.route("/country").post(createemployee)
router.route("/getdata").get(getemployee)
router.route('/update/:id').put(updatedata)
router.route('/delete/:id').delete(deleteemployee)
router.route('/getdataby/:id').get(getemployeebyid)
module.exports=router