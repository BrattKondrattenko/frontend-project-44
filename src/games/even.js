import {
  getName,
  helloFunction,
  statusOfCheckAnswers,
  createNumbersForEven,
  checkAnswersEven,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const nameOfUser = getName();
console.log(helloFunction(nameOfUser));

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const numbers = createNumbersForEven();
    const result = checkAnswersEven(numbers, nameOfUser);
    if (statusOfCheckAnswers(result)) {
      return result;
    }
    console.log(result);
  }
  return `Congratulations, ${nameOfUser}!`;
};

export default even;
