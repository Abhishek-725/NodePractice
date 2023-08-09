const os = require('os');
const app = require('../app');
const cluster = require('cluster');
let cpuNum = os.cpus().length;
 
let port = process.env.SERVER_PORT || 5555;


if (cluster.isMaster) {
    for (let num = 0; num < cpuNum -2 ; num++) {
        cluster.fork()
    }
}
else{
    app.listen(port,() =>{
        console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
    })
}
