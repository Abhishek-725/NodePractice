const EventEmmiter = require('events');

const emitter = new EventEmmiter();

console.log('before');
emitter.on('order-piza',() => {
    console.log(`order received`);
})
emitter.emit('order-piza')
console.log('after');