const User = require('../model/Users');
const ResponseHandler = require('../utils/ResponseHandler');
const errorWrapper = require('../utils/errorWrapper');
const userServices = require('../services/userServices');

exports.createUser = errorWrapper(async (req,res,next) => {
    const result = await userServices.craeteUser(req);
    res
      .status(201)
      .json({
        status: 201,
        message: "User created successfully.",
        data: result,
      });
}
);

exports.getUsers = errorWrapper(async (req, res, next) => {
    const {email} = req.query;
    const { count, data } = await userServices.getUsers(email);
    return ResponseHandler.success(res,data,200);
    // return res.status(200).json({
    //     status: 200,
    //     count: count,
    //     data: data,
    // });
});