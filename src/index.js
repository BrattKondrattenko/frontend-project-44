import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');
const helloFunction = (nameOfUser) => `Hello, ${nameOfUser}!`;

const getAnswer = () => readlineSync.question('Your answer: ');
const getRandomInt = (max) => Math.floor(Math.random() * max);
const getRandomIntInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomExpression = (expressions) => Math.floor(Math.random() * expressions.length);

const isEven = (number) => number % 2 === 0;
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const isPlus = (expression) => expression === '+';
const isSub = (expression) => expression === '-';
const isCorrectAnswer = (number, answerUser) => number.toString() === answerUser;
const statusOfCheckAnswers = (result) => result !== 'Correct!';
const wrongAnswer = (wrong, correct, nameOfUser) => `${wrong} is wrong answer ;(. Correct answer was ${correct} \nLet's try again, ${nameOfUser}!`;
const createExpressions = () => ['*', '+', '-'];
const expressions = createExpressions();

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
};

const createNumbersForGcd = () => {
  const number1 = getRandomInt(20);
  const number2 = getRandomInt(20);
  console.log(`Question: ${number1} ${number2}`);
  return [number1, number2];
};

const createNumbersForCulc = () => {
  const number1 = getRandomInt(20);
  const number2 = getRandomInt(20);
  const expression = expressions[getRandomExpression(expressions)];
  console.log(`Question: ${number1} ${expression} ${number2}`);
  return [number1, number2, expression];
};

const createNumbersForProgression = () => {
  const progression = [];
  const number = getRandomIntInRange(10, 80);
  const progress = getRandomIntInRange(3, 10);
  const hiddenNumber = getRandomIntInRange(0, 9);
  for (let i = number; i < number + progress * 10; i += progress) {
    progression.push(i);
  }
  const correctAnswer = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  console.log(`Question: ${[progression.join(' ')]}`);
  return correctAnswer;
};

const createNumbersForPrime = () => {
  const number = getRandomInt(20);
  console.log(`Question: ${number}`);
  return number;
};

const createNumbersForEven = () => {
  const number = getRandomInt(15);
  console.log(`Question: ${number}`);
  return number;
};

const checkAnswersEven = (number, nameOfUser) => {
  const answer = getAnswer();
  if (isEven(number)) {
    if (isCorrectAnswer('yes', answer)) {
      return 'Correct!';
    }
    return wrongAnswer(answer, 'yes', nameOfUser);
  }
  if (isCorrectAnswer('no', answer)) {
    return 'Correct!';
  }
  return wrongAnswer(answer, 'no', nameOfUser);
};

const checkAnswersCalc = (arr, nameOfUser) => {
  const [number1, number2, expression] = arr;
  const answer = getAnswer();
  if (isPlus(expression)) {
    const sumOfNumbers = number1 + number2;
    if (isCorrectAnswer(sumOfNumbers, answer)) {
      return 'Correct!';
    }
    return wrongAnswer(answer, sumOfNumbers, nameOfUser);
  } if (isSub(expression)) {
    const subOfNumbers = number1 - number2;
    if (isCorrectAnswer(subOfNumbers, answer)) {
      return 'Correct!';
    }
    return wrongAnswer(answer, subOfNumbers, nameOfUser);
  }
  const multiplicationOfNumbers = number1 * number2;
  if (isCorrectAnswer(multiplicationOfNumbers, answer)) {
    return 'Correct!';
  }
  return wrongAnswer(answer, multiplicationOfNumbers, nameOfUser);
};

const checkAnswersGcd = (arr, nameOfUser) => {
  const [number1, number2] = arr;
  const answer = getAnswer();
  const gcdOfNum = gcd(number1, number2);
  if (isCorrectAnswer(gcdOfNum, answer)) {
    return 'Correct!';
  }
  return wrongAnswer(answer, gcdOfNum, nameOfUser);
};

const checkAnswersProgression = (correctAnswer, nameOfUser) => {
  const answer = getAnswer();
  if (isCorrectAnswer(answer, correctAnswer)) {
    return 'Correct!';
  }
  return wrongAnswer(answer, correctAnswer, nameOfUser);
};

const checkAnswersPrime = (number, nameOfUser) => {
  const answer = getAnswer();
  if (isPrime(number)) {
    if (isCorrectAnswer('yes', answer)) {
      return 'Correct!';
    }
    return wrongAnswer(answer, 'yes', nameOfUser);
  }
  if (isCorrectAnswer('no', answer)) {
    return 'Correct!';
  }
  return wrongAnswer(answer, 'no', nameOfUser);
};

export {
  helloFunction,
  getName,
  getRandomInt,
  getRandomExpression,
  isEven,
  isPlus,
  isSub,
  isCorrectAnswer,
  wrongAnswer,
  createExpressions,
  createNumbersForCulc,
  createNumbersForEven,
  createNumbersForGcd,
  createNumbersForProgression,
  createNumbersForPrime,
  checkAnswersCalc,
  checkAnswersEven,
  checkAnswersGcd,
  checkAnswersProgression,
  checkAnswersPrime,
  statusOfCheckAnswers,
};
