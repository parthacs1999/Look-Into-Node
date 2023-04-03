// const http=require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path=require('path');
// app.use((req,res,next)=>{
//     console.log('In the middleware');
//     next();//Allows the request to continue to the next middleware
// });

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})
// const server=http.createServer(app);
// server.listen(3000);
app.listen(3000);




// Assignment

// const express=require('express');
// const app=express();
// app.use('/users',(req,res,send)=>{
//     console.log("First middleware");
//     res.send('<h1>Users Data</h1>');
// })
// app.use('/',(req,res,send)=>{
//     console.log("second middleware");
//     res.send('<h1>Home Page</h1>');
// })
// app.listen(3000);


// app.post--->only for post request
// app.get--->only for get request
