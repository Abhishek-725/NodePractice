const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_CONNECTION_STR, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DataBase Connected successfully .");
  })
  .catch((error) => {
    console.log("DataBase Connection error : ", error);
  });