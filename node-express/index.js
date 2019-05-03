const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyParser=require('body-parser');

const dishrouter=require('./router/dishrouter');
const hostname='localhost';
const port=3000;

const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());
app.use('/dishes',dishrouter);

app.use((req,res,next)=>{
    
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end('<html><body><h1>This is express Server</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server running http://at ${hostname}:${port}`)
});



 

