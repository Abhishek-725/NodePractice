const Emitter = require('events');


class Pizza_Shop extends Emitter{
    private _orderNumber : number;
    constructor() {
        super();
        this._orderNumber = 0;
    }

    order(size : number , toppings : string) : void{
        this._orderNumber++;
        this.emit('order',size,toppings);
    }

    displayOrderNumber():void{
        console.log(`Current order number is : ${this._orderNumber}`);
        
    }
}

module.exports = Pizza_Shop;