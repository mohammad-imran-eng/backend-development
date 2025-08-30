const express = require('express');
const app = express();
port = 3000;


app.use(express.json());

const myToken ="1234"

const checkToken = (req,res,next)=> {
    if(req.query.token === myToken){
         next()
    }
    else {
       res.status(404).send({message:"unathorized access"});
    }
    
    
}

const myPass = "24680"


// custom middleware
app.use(checkToken);
app.use((req,res,next)=> {
    console.log(req.query.pass)
    if(req.query.pass == myPass){
        ;
        next();
    }
    else {
        res.status(404).send({message: "password was invalid"});
    }
})

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



app.listen(port,()=> {
    console.log("Server is running")
})
