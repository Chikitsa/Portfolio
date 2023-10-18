const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const url = 'mongodb+srv://chikitsa:MJRnj0HZ2PyIcIDw@cluster0.jtiiuwr.mongodb.net/?retryWrites=true&w=majority'


app.use(express.json())
app.use(cors())
app.listen(4000, () => {
    console.log('server connected ')
})

app.get('/', async (req, res) => {
    res.json({ message: "server connected" })
})

mongoose.connect(url).then(() => {
    console.log('db connected')
})


const contactSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
})

const contactModel = mongoose.model('Contact', contactSchema)



const sendEmail = async (name, email, subject, message) => {
    try {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        });


        let info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'chikitsa.nijai03@gmail.com',
            subject: subject,
            text: message,
            html: `<b>${message}</b>`,
        });

        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error(error);
    }
};

app.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        res.status(404).json({ message: "contact submitted succedffuly" })
    }

    const newContact = await contactModel.create({
        name, email, subject, message
    })

    await sendEmail(name, email, subject, message)
    res.status(200).json({ message: "new contact created ", Contact: newContact })
})

