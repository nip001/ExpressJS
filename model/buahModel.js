const mongodb = require('mongoose')

const modelBuah = new mongodb.Schema({
    warnaBuah:{
        type:String
    },
    bentukBuah:{
        type:String
    },
    namaBuah:{
        type:String
    },
    hargaBuah:{
        type:"number"
    },
    satuanJual:{
        type:String
    },
    rasaBuah:{
        type:String
    },
    gambarBuah:{
        type:String
    }
})

const DataBuah = mongodb.model('dagangBuah',modelBuah)

module.exports = DataBuah;