const express = require('express')
const app = express()

app.use('/', (req, res) => {
    res.send("hey world")
})
app.listen(3001)