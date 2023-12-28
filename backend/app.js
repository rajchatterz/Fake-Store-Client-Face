const express = require('express')
const app = express()
const Product = require('./models/ProductDetails')
const AuthSchema= require('./models/AuthDeatails')
const cors = require('cors')
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/eg', (req, res) => {
    res.send("hehheehh")
})
app.get('/', (req, res) => {
    res.send("hey world")
})

app.post('/admin', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})
app.post('/register', async(req, res) => {
    try {
        const users = await AuthSchema.create(req.body)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
})
app.get('/admin', async(req, res) => {
    try {
        const resposne = await Product.find({})
        res.status(200).json(resposne)
    } catch (error) {
        res.status(500).json(error)
    }
})
app.get('/register', async (req, res) => {
    try {
        const response = await AuthSchema.find({})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})
app.get('/register/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const user = await AuthSchema.findOne({ email }); // Changed to AuthSchema
        if (!user) {
            return res.status(404).json({ message: "No valid user" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});


app.listen(3001)
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://rajchatterz:IWlj6fLZ330S2y5H@edtech.df872ze.mongodb.net/?retryWrites=true&w=majority').then((con)=>console.log(`server connected ${con.Connection.name}`)).catch((err)=>console.log(err))