require('custom-env').env(true);
const express = require('express');
const app = require('../app');
require('../model/index');

let Port = process.env.SERVER_PORT ||  3001;
app.listen(Port,() => {
    console.log(`Server is listening on port ${Port}....`);
});
app.use(express.json());
app.use(express.urlencoded({extended : true}));

