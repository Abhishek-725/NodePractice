const express = require('express');
require('custom-env').env(true);
const app = express();
app.use(express.json());
let port = process.env.SERVER_PORT || 3000;
app.listen(port,() =>{
    console.log(`SERVER IS RUNNING ON PORT ${port}....`);
})
module.exports = app;

require('./models/index');