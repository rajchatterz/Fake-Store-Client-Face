const mongoose = require('mongoose')
const AuthSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:[true,'Please enter your Full name']
        },
        email: {
            type: String,
            required:[true,'Please enter your email']
        },
        password: {
            type: String,
            required:[true,'Please enter the password']
        }
    }
)
const userData = mongoose.model('userData', AuthSchema)
module.exports=userData