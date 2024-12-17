const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();


// const birthdayGreetings = ({ name }) => {
//     console.log(`Happy birthday ${name}`);
// }

// myEventEmitter.on('birthday', birthdayGreetings);    


const birthdayGreetings = (name) => {
    console.log(`Happy birthday ${ name }`);
}
const onBirthdayGreetingsListener = ({ name }) => {
    birthdayGreetings(name);
}

myEventEmitter.on('birthday', onBirthdayGreetingsListener);

myEventEmitter.emit('birthday', { name: 'Pistar' });