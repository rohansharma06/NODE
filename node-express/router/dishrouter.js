const express=require('express');
const bodyParser=require('body-parser');

const dishrouter=express.Router();

dishrouter.use(bodyParser.json());

dishrouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you!');
})
.post((req,res,next)=>{
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
  })
   
.delete((req, res, next) => {
      res.end('Deleting all dishes');
  });

module.exports=dishrouter;