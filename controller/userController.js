const DataUser = require('../model/usersModel')

exports.addUser = (req,res)=>{ 
    let {first_name,last_name,email,gender} = req.body
    
    let data = new DataUser({
        first_name:first_name,
        last_name:last_name,
        email:email,
        gender:gender
    })
    data.save().then(doc => {
        res.status(200).send("Berhasil hore hore "+doc)
    }).catch(err => {
        res.status(500).send("Gagal "+ err)
    })
}

exports.getAllUser = (req,res) =>{
    DataUser.find().exec((err,temp)=>{
        
        res.status(200).json({
            message : "Success",
            jumlahData : temp.length,
            timestamp : req.requestTime,
            dataa: temp
        })    
    });
}

exports.getUserById = async(req,res)=>{
    let nama = req.params.nama
    console.log(nama)
    let hasil = await DataUser.find({first_name:nama});
    res.status(200).json({
        message : "Success",
        timestamp : req.requestTime,
        dataa: hasil
    })
}

exports.updateDataUser = async(req,res)=>{
    let nama = req.params.nama
    await DataUser.findOneAndUpdate({first_name:nama},req.body,(err, docs)=>{
        if(err || docs === null){

            res.status(400).json({
                message : "Gagal Update Data",
                timestamp : req.requestTime
            })
        }else{
            res.status(200).json({
                message : "Success Update Data",
                timestamp : req.requestTime,
                data: docs
            })
        }

    })
}

exports.deleteDataUser = async(req,res)=>{
    let nama = req.params.nama
    await DataUser.findOneAndDelete({first_name:nama},(err,docs)=>{
        if(err){
            res.status(400).json(err)
        } else{
            res.status(200).json({
                    message:"Berhasil dihapus",
                    data:docs
                })
        }
    })
}