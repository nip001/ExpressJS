var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')

/* GET users listing. */
router.route('/')
      .get(userController.getUser)
      .post(function(req,res,next){ 
          const nama = req.body.nama;
          const alamat = req.body.alamat;
          const umur = req.body.umur
          res.json({
            message: "berhasil mendapatkan data",
            data: {
              nama: nama,
              alamat: alamat,
              umur: umur
            }
          })
      })
      
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.post('/add',function(req,res,next){
//   const nama = req.body.nama;
//   const alamat = req.body.alamat;
//   const umur = req.body.umur
//   res.json({
//     message: "berhasil mendapatkan data",
//     data: {
//       nama: nama,
//       alamat: alamat,
//       umur: umur
//     }
//   })
// })

module.exports = router;
