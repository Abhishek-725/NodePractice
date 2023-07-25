const PizzaShop = require('./Pizza-shop.js')

let order1 = new PizzaShop();
order1.on('order',(size , topping) => {
    console.log(`Order received! Baking ${size} pizza with ${topping}`);
})
order1.order(10,'mushroom , corn ');
order1.displayOrderNumber();


