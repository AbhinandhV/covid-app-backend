const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patient=require("./controller/addrecord")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://abhinandh:jazz9333@cluster0.ubk8s.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/patient",patient
)
app.listen(3001,()=>{
    console.log("running")
})