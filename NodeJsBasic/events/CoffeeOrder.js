const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

//Fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// }

// const makeBill = ({ price }) => {
//     console.log(`Bill dengan harga sebesar ${price} telah dibuat!`);
// }


//Mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);


//Fungsi khusus untuk menangani event dengan menggunakan handler/listener

const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
}

const makeBill = (price) => {
    console.log(`Bill dengan harga sebesar ${price} telah dibuat!`);
}
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 50000 });