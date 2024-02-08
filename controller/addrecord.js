const express=require("express")
const patientmodel=require("../addpatientmodel/AddPatientModel")


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

module.exports=router