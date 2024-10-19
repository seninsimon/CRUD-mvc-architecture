const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/CRUDdbs'


const databaseConnection = async ()=>
{
    try {
        const connectdb = await mongoose.connect(url)
        console.log("data base connected successfully")
    } catch (error) {
        console.log("eroor :",error)
    }
}


module.exports = databaseConnection