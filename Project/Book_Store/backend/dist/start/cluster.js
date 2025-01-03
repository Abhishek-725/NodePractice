"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = require('os');
const app_1 = __importDefault(require("../app"));
const cluster = require('cluster');
let cpuNum = os.cpus().length - 5;
// console.log(cpuNum);
let port = process.env.SERVER_PORT || 5555;
// if (cluster.isMaster) {
//     for (let num = 0; num < cpuNum -2 ; num++) {
//         cluster.fork()
//     }
// }
// else{
//     app.listen(port,() =>{
//         console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
//     })
// }
app_1.default.listen(port, () => {
    console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
});
