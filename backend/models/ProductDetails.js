const mongoose = require('mongoose')
const producrSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:[true,'Please enter your name']
        },
        price: {
            type: Number,
            required:[true,'please enter the value of the product']
        },
        color: {
            type: String,
            required:[true,'Color name?']
        },
        image: {
            type: String,
            required:[true,'Please paste the image url']
        }
    }
)
const Product = mongoose.model('productData', producrSchema)
module.exports=Product