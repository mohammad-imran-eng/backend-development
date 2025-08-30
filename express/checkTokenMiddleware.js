const myToken = process.env.MY_TOKEN
const myPass = process.env.MY_PASS

const checkToken = (req,res,next)=> {
    if(req.query.token === myToken){
         next()
    }
    else {
       res.status(404).send({message:"unathorized access"});
    }
    
    
}
const checkPass = (req,res,next)=> {
    if(req.query.pass == myPass){
        ;
        next();
    }
    else {
        res.status(404).send({message: "password was invalid"});
    }
}


module.exports = {checkToken,checkPass}