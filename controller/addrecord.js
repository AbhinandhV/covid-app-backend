const express=require("express")
const patientmodel=require("../addpatientmodel/AddPatientModel")
const AddPatientModel = require("../addpatientmodel/AddPatientModel")


const router=express.Router()

router.post("/add",async(req,res)=>
{
    let data=req.body
    let ptmodel=new patientmodel(data)
    let result=ptmodel.save()
    res.json(
        {
            status:"success"
        }
    )
})

router.post("/search",async(req,res)=>
{
    let data=req.body
    let searchModel=await AddPatientModel.find(data)
    res.json(searchModel)
})

module.exports=router