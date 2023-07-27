const jwt = require('jsonwebtoken');
const Users = require('../model/users');

module.exports = async(req,res,next) => {
    let bearer = req.headers.bearer;
    jwt.verify(bearer,process.env.JWT_SECRET,(err,verify)=>{
        if (err) {
            res.status(401).json({error : err.message,message :'Token Experied'});
        }else{
            if (verify) {
                let {id , email , role } =  verify.data;
                req.userData = verify.data;
                let user = Users.findOne({where : {email:email , token : bearer}})
                if (user) {
                    next();
                }else{
                    res.status(401).send("Invalid token!");
                }
            }
        }
    });
    
    
}
