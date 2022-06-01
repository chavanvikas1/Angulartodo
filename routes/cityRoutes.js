
const express=require('express')
const { createcity, getcity, updatecity, findid, deletecity } = require('../controller/citycontroller')
const router=express.Router()

router.route('/createcity').post(createcity)
router.route('/getcity').get(getcity)
router.route('/updatecity/:id').put(updatecity)
router.route('/getcityby/:id').get(findid)
router.route("/deletecity/:id").delete(deletecity)
module.exports=router