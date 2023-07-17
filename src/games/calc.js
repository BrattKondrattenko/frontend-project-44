import {
  getName,
  helloFunction,
  createNumbersForCulc,
  checkAnswersCalc,
  statusOfCheckAnswers,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const nameOfUser = getName();
console.log(helloFunction(nameOfUser));

const calc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const numbers = createNumbersForCulc();
    const result = checkAnswersCalc(numbers, nameOfUser);
    if (statusOfCheckAnswers(result)) {
      return result;
    }
    console.log(result);
  }
  return `Congratulations, ${nameOfUser}!`;
};

export default calc;
