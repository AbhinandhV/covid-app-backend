const mongoose=require("mongoose")

patientSchema=new mongoose.Schema(
    {
    patientName:String,
    patientstatus:String,
    patientphone:String,
    symptom:String

    }

)
module.exports=mongoose.model("patient",patientSchema)