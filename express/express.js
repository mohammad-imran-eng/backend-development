const express = require('express');
const app = express();
port = 3000;

app.get('/',(req,res)=> {
    res.send("Wecome to express server");
})

app.listen(port,()=> {
    console.log("Server is running")
})
