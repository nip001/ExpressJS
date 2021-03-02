const mongodb = require('mongoose')

const modelUser = new mongodb.Schema({
    email : {
        type : String,
        require :[true, "Masukan Email"],
        unique : true
    },
    first_name : {
        type : String,
        default: "wkkwkw"
    },
    last_name : {
        type : String,
        default: "wkkwkw"
    },
    gender : {
        type : String
    }
})

// const dataSchema = new mongodb.Schema({})

const DataUser = mongodb.model('users',modelUser)

module.exports= DataUser;