const jwt = require("jsonwebtoken");

module.exports ={
    checkLogin : (req,res,next)=>{
        const bearer = req.header("x-access-token");
        if(!bearer){
            res.status(401).send({
             msg:"CAN'T ACCESS" ,
             status :401,
             Error :"You Must Be Logged"  
            })
            
        }else{
            const token = bearer.split(" ")[1]
            try{
            const decodedToken = jwt.verify(token,process.env.SECRET_KEY)
            req.decodeToken = decodedToken;
            next();
            }
            catch(error){
                res.status(401).send({
                msg :"Can't Access",
                ststus : 401,
                error : "Invalid Token"    
                });
                
            }
            
        }
},
};