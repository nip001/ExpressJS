const mongodb = require('mongoose')

const modelUser = new mongodb.Schema({
    first_name : {
        type : String,
        default: "wkkwkw"
    },
    last_name : {
        type : String,
        default: "wkkwkw"
    },
    email : {
        type : String,
        unique : true
    },
    gender : {
        type : String
    }
})

// const dataSchema = new mongodb.Schema({})

const Temp = mongodb.model('dataUsers',modelUser)

module.exports= Temp;