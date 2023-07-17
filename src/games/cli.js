import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const helloFunction = () => {
  console.log('Welcome to the Brain Games!');
  return `Hello, ${getName()}!)`;
};

export default helloFunction;
