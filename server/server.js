const express=require('express')
const mongoose=require('mongoose')

const app=express()
const url='mongodb+srv://chikitsa:MJRnj0HZ2PyIcIDw@cluster0.jtiiuwr.mongodb.net/?retryWrites=true&w=majority'


app.use(express.json())
app.listen(4000,()=>{
    console.log('server connected ')
})

app.get('/',async(req,res)=>{
    res.json({message:"server connected"})
})

mongoose.connect(url).then(()=>{
    console.log('db connected')
})


const contactSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
})

const contactModel=mongoose.model('Contact',contactSchema)




app.post('/contact',async(req,res)=>{
    const {name,email,subject,message}=req.body;
    if(!name || !email || !subject || !message){
        res.status(404).json({message:"contact submitted succedffuly"})
    }

    const newContact=await contactModel.create({
        name,email,subject,message
    })

    res.status(200).json({message:"new contact created ",Contact:newContact})
})

