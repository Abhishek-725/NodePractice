const { NUMBER } = require("sequelize");
const bcrypt = require("bcrypt");
const User = require("../model/users");
const convertToUrl = require("../utils/convertImageUrl");
const hashPassword = require("../utils/hashPassword");
const Users = require("../model/users");
const db = require('../dataBase/pg_promise');
module.exports = {
  insertUser,
  viewUserByPhone,
  checkUser,
};

async function insertUser(req, data) {
  // converting imagepath to url
  let image = convertToUrl(req.file.path);
  let { firstName, lastName, email, password, phone } = data;
  // Hashing password
  password = await hashPassword(password);

  // let result = await User.create({
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  //   phone,
  //   profileImage: image,
  // });

  await db.proc('insert_users',[firstName, lastName, email, password, phone,image])
  return "Account created successfully";
}

async function checkUser(data) {
  let { email, password } = data;
  let user = await Users.findOne({ where: { email: email } });
  let { id, role } = user.dataValues;
  if (user) {
    let match = await bcrypt.compare(password, user.password);
    return match ? { id, role, email } : false;
  } else {
    return false;
  }
}

async function viewUserByPhone(number) {
  if (NUMBER(number)) {
    if (number.length === 10) {
      // let user = await User.findOne({
      //   attributes: { exclude: ["password", "token", "role"] },
      //   where: { phone: number },
      // });
      // return user;
      let result = await db.query(
        'select id,"firstName","lastName",email,phone,"profileImage"  from users where phone = $1',
        number
      );
      return result;
    } else {
      throw new Error("Number must contain 10 digit..");
    }
  } else {
    throw new Error("Please enter number..");
  }
}
