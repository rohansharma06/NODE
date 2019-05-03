const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
const morgan=require('morgan'); 

const dishrouter=require('./Router/dishrouter')
const promotionsrouter=require('./Router/promotions')
const leadersrouter=require('./Router/leaders')

const hostname='localhost';
const port=3000;

const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.use('/dishes',dishrouter);
app.use('/promotions',promotionsrouter);
app.use('/leaders',leadersrouter);

app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end('<html><body><h1>This is express Server</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server running http://at ${hostname}:${port}`)
});