const express = require('express')
const app = express()
const Product = require('./models/ProductDetails')
const cors = require('cors')
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())
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
app.get('/admin', async(req, res) => {
    const admin = await Product.find({})
    res.status(200).json(admin)
})

app.listen(3001)
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://rajchatterz:IWlj6fLZ330S2y5H@edtech.df872ze.mongodb.net/?retryWrites=true&w=majority').then((con)=>console.log(`server connected ${con.Connection.EventEmitterAsyncResource}`))