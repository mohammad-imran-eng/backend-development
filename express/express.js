const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const {checkToken,checkPass} = require('./checkTokenMiddleware');
PORT = process.env.PORT || 3000;


app.use(express.json());


// custom middleware
app.use(checkToken);
app.use(checkPass);

// dummy json data
const newsData = {
    newsTitle: "Sheikh hasina palaise",
    newsViews: "10 Million"
}

app.get('/',(req,res)=> {
    res.send("Wecome to express server");
})

app.get('/news',(req,res)=> {
    res.send(newsData);
})

app.post('/login',(req,res)=> {
    console.log(req.body);
    res.send(
        {
            statue:2
            ,message: "Welcome to post method",
            data:req.body,
            queryData: req.query
        });
})

app.get('/news/:id',(req,res)=> {
    const id = req.params.id;
    console.log(id);
    res.send(id);
})

app.get('/about',(req,res)=> {
    const data = req.query;
    console.log(data);
    res.send(data);
})



app.listen(PORT,()=> {
    console.log("Server is running")
})
