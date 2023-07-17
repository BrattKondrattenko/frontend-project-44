import {
  getName,
  helloFunction,
  statusOfCheckAnswers,
  createNumbersForProgression,
  checkAnswersProgression,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const nameOfUser = getName();
console.log(helloFunction(nameOfUser));

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const numbers = createNumbersForProgression();
    const result = checkAnswersProgression(numbers, nameOfUser);
    if (statusOfCheckAnswers(result)) {
      return result;
    }
    console.log(result);
  }
  return `Congratulations, ${nameOfUser}!`;
};

export default progressionGame;
