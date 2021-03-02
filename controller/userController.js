const Temp = require('../model/usersModel')
console.log(Temp)
exports.getUser = (req,res,next) =>{
    let data = new Temp({
        first_name:"Dewa",
        last_name:"islan",
        email:"mantap@gmail.com",
        gender:"male"
    })
    data.save((err)=>{
        console.log(err)
    })
    Temp.find().exec((err,temp)=>{
        
        console.log(temp)
        res.status(200).json({
            dataa: temp
        })    
    });
    // Temp.find({}).
    // then(result => { 
    //     res.status(200).json(
    //         { 
    //             message: "Data User Berhasil Di ambil", 
    //             data: result }) })
    //             .catch(err => { 
    //                 next(err); 
                    
    //         }
    // ) 
}