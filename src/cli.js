import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const helloFunction = () => {
    const readlineSync = require('readline-sync');
    console.log(readlineSync);
    const userName = readlineSync.question('May I have your name? ');
    console.log(userName);
    console.log('Hello,' + userName + '!');
}
export default helloFunction;