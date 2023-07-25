"use strict";
const Emitter = require('events');
class Pizza_Shop extends Emitter {
    constructor() {
        super();
        this._orderNumber = 0;
    }
    order(size, toppings) {
        this._orderNumber++;
        this.emit('order', size, toppings);
    }
    displayOrderNumber() {
        console.log(`Current order number is : ${this._orderNumber}`);
    }
}
module.exports = Pizza_Shop;
