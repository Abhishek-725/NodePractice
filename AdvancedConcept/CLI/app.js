const express = require('express');
const {Worker} = require('node:worker_threads')
const app = express();

app.listen(4000,() => {
    console.log(`Server listening on port 4000....`);
});

app.get('/',(req,res,next) => {
    res.send('<h2>Home</h2>')
})

app.get('/slow',(req,res,next) => {
    const worker = new Worker('./worker.js')
    worker.on('message',(j) => {
        res.send(`<h2>No. ${j}</h2>`)
    })
})