const express = require("express");
const app = express();
const PORT=4000;

app.get("/currenttimestamp",function (request,response){
    response.send(hello);
});

console.log(process.argv);
app.listen(PORT,()=>console.log(`server started in ${PORT}`));

const fs = require('fs');

var currentdate = new Date(); 
var datetime = "Last Sync:DATE: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @TIME"  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
console.log(datetime);

const hello = `Hi welcome \nCurrent Timestamp ${datetime}`;

fs.writeFile("./current data-time.txt", hello, err => {
    console.log(" Text file created successfully!")
});

 fs.readdir("./newfolder",(err,files)=>{
    console.log(files);
});
