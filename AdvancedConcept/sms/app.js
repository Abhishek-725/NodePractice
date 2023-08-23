const express = require('express');
const otpGenerator = require('otp-generator');
const app = express();

app.listen(1200,()=>{
    console.log('App is listening on 1200....');
})
app.get('/sms',(req,res,next) => {
    let otp = otpGenerator.generate(6,{
        lowerCaseAlphabets : false,
        specialChars : false,
        upperCaseAlphabets : false
    })

    res.send(`Your otp ${otp}..`);
})