const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello Namaste Tech Coder's");
})

app.listen(2000);