const express=require('express');
const port=8000;
const path=require('path');

const app=express();

app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // const serverIp = req.socket.localAddress;
    // console.log(serverIp);
    res.render('welcome.ejs');
});

app.listen(port, (err)=>{
    if(err){
        console.log("Error in Launching Application ", err);
    }

    console.log("Application is up and running on port -",port);
    console.log("Hello This is your application");
});