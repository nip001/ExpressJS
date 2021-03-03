const DataBuah = require('../model/buahModel');

exports.insertBuah = (req,res)=>{
    let {warnaBuah,bentukBuah,namaBuah,hargaBuah,satuanJual,rasaBuah} = req.body;
    let filePath = req.file.path

    let data = new DataBuah({
        warnaBuah:warnaBuah,
        bentukBuah:bentukBuah,
        namaBuah:namaBuah,
        hargaBuah:hargaBuah,
        satuanJual:satuanJual,
        rasaBuah:rasaBuah,
        gambarBuah:filePath,
    })
    data.save().then(doc => {
        res.status(200).json({
            message : "Berhasil Insert Buah",
            timestamp : req.requestTime,
            data:doc
        })
    }).catch(err => {
        res.status(500).send("Gagal "+ err)
    })    
}

exports.getAllBuah = (req,res)=>{
    DataBuah.find().exec((err,data)=>{
        if(!err){
            res.status(200).json({
                message : "Success get All Buah",
                timestamp : req.requestTime,
                data:data
            })
        }else {
            res.status(400).send("Gagal Input "+err);
        }
    })
}

exports.getDataBuahByRasa = (req,res)=>{
    let rasa = req.params.rasa
    DataBuah.find({rasaBuah:{$regex:rasa,$options:'i'}}).exec((err,doc)=>{
        if(!err){
            res.status(200).json({
                message:"Berhasil mendapatkan buah dengan rasa "+rasa,
                timestamp : req.requestTime,
                data:doc
            })
        }
        else{
            res.status(400).send("Gagal mendapatkan buah" + err)
        }
    })
}

exports.getDataBuahByHarga = (req,res)=>{
    let harga = req.params.harga
    DataBuah.find({hargaBuah:harga}).exec((err,doc)=>{
        if(!err){
            res.status(200).json({
                message:"Berhasil mendapatkan buah dengan harga "+harga,
                timestamp : req.requestTime,
                data:doc
            })
        }
        else{
            res.status(400).send("Gagal mendapatkan buah" + err)
        }
    })
}

exports.updateBuah = (req,res) =>{
    let rasa = req.params.rasa
    DataBuah.updateOne({rasaBuah:rasa},req.body,(err,doc)=>{
        if(!err){
            res.status(200).json({
                message:"Berhasil Update buah dengan rasa "+rasa,
                timestamp : req.requestTime,
            })
        } else{
            res.status(400).send("Gagal Update "+ err)
        }
    })
}

exports.deleteBuah = (req,res)=>{
    let rasa = req.params.rasa
    DataBuah.deleteMany({rasaBuah:rasa},(err,doc)=>{
        if(!err){
            res.status(200).json({
                message:"Berhasil Delete buah dengan rasa "+rasa,
                timestamp : req.requestTime,
            })
        }
        else{
            res.status(400).send("Gagal Delete "+ err)
        }
    })
}