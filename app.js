var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var buahRouter = require('./routes/buah')

var app = express();

//multer 
const multer = require('multer');
const fileStorage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null,'images')
  },
  filename: (req,file,cb) =>{
    cb(null,Date.now()+ '_'+ file.originalname)
  }
})

const fileFilter  = (req,file,cb)=>{
  if(file.mimetype ==='image/png' || file.mimetype ==='image/jpg' || file.mimetype ==='image/jpeg'){
    cb(null,true)
  }else {
    cb(null,false)
  }
}

// const bodyParser=require('body-parser')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const DB =process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD)

const mongodb = require('mongoose')

mongodb.connect(
  DB,
  {useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify:true}).then(connection =>{
    console.log("Koneksi Berhasil")
})
// var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb+srv://admin:admin123@biodata.vn31h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (err, db) {
//   if (err) throw err

//   db.db('biodata').collection('user').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
// })
//body parser


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}))

app.use('/images', express.static(path.join(__dirname,'images')))
app.use(multer({
  storage:fileStorage,
  fileFilter:fileFilter
}).single('gambarBuah'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dagangBuah',buahRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
