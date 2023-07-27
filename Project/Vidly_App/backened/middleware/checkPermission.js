const Permission = require('../model/permission');


module.exports = async(req,res,next) => {
    let {role} = req.userData;
    console.log('=========',req.method,req.route.path,req.baseUrl);
    let access = await Permission.findOne({where :{
        role_id : role,
        method : req.method,
        path : req.route.path,
        url : req.baseUrl
    }});
    if (access !== null) {
        next();
    }else{
         res.status(401).send("Permision Denied")
    }
}