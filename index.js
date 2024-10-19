const express = require('express')
const app = express();
const db = require('./database/db')
db()


const productroute = require('./routes/productroute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routes
app.use('/',productroute)


















app.listen(3000, () => {
    console.log("the server is running")
})