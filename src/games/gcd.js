import {
  getName,
  helloFunction,
  statusOfCheckAnswers,
  checkAnswersGcd,
  createNumbersForGcd,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const nameOfUser = getName();
console.log(helloFunction(nameOfUser));

const maxGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const numbers = createNumbersForGcd();
    const result = checkAnswersGcd(numbers, nameOfUser);
    if (statusOfCheckAnswers(result)) {
      return result;
    }
    console.log(result);
  }
  return `Congratulations, ${nameOfUser}!`;
};

export default maxGcd;
