const cron = require('node-cron');


let task = cron.schedule('*/2 * * * * *',() =>{
    console.log('Cron is run');
});

task.start();
// setTimeout(() => {
//     // task.stop();
// }, 7000);