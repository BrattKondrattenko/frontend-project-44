import {
  getName,
  helloFunction,
  statusOfCheckAnswers,
  createNumbersForPrime,
  checkAnswersPrime,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const nameOfUser = getName();
console.log(helloFunction(nameOfUser));

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numbers = createNumbersForPrime();
    const result = checkAnswersPrime(numbers, nameOfUser);
    if (statusOfCheckAnswers(result)) {
      return result;
    }
    console.log(result);
  }
  return `Congratulations, ${nameOfUser}!`;
};

export default primeGame;
