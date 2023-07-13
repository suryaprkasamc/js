// const EventEmitter  = require ("node:events")
// const ps = require('./pizza')
// const dm = require('./DrinkMachine')
// const shop = new ps();
// const drink = new dm()
// shop.on("order" , (size, topping)=>{
//     console.log(`ordered a ${topping} pizza of ${size} size `);
//     drink.serveDrink(size)

// })
// shop.displayOrderNo();
// shop.order("L", "Chicker")
// shop.order("M", "Mushroom")


// const emitter  = new EventEmitter()
// emitter.on('switchOn',(bulb, strength)=>{
//     console.log(`switched on  the ${bulb} with strength of ${strength}`)
// })
// emitter.emit('switchOn','BULB01','0.5');
// shop.displayOrderNo();
const file = require ("fs")
file.readFile(__filename, ()=>{
    console.log('file read  1 ' )

})
process.nextTick(()=>{console.log(`next tick  1`)})
Promise.resolve().then(()=>{console.log('resolve 1')})
setImmediate(()=>{console.log( `set immediate  1`)})
setTimeout(()=>{console.log(`set timeout 1`),1})