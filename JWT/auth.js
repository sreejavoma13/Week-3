const jwt=require('jsonwebtoken')

const SECRET_KEY='secret_key'
function authenticatetoken(req,res,next){
    const authHeader=req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        res.status(404).json({message:'access token missing'})
    }
    jwt.verify(token,SECRET_KEY,(err,decoded)=>{
        if(err){
            return res.ststus(403).json({message:'Inavalid'})
        }
        req.user=decoded;
        next();
    })
}
module.exports = authenticatetoken;