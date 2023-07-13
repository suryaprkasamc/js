const EventEmitter = require('node:events')
class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNo = 0;
    }
    order(size, topping){
        this.orderNo++ ;
        this.emit('order', size, topping)
    }
    displayOrderNo(){
        console.log(    `current order number is ${this.orderNo}`)
    }
}
module.exports = PizzaShop;