import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils';
import common from '..';

const MAX = 50;

const levelFlow = () => {
  const operations = ['+', '-', '*'];
  const firstNumber = getRandomInt(MAX);
  const secondNumber = getRandomInt(MAX);
  const operation = operations[getRandomInt(2)];

  console.log(`Question:  ${firstNumber} ${operation} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = String(firstNumber + secondNumber);
      break;
    case '-':
      correctAnswer = String(firstNumber - secondNumber);
      break;
    case '*':
      correctAnswer = String(firstNumber * secondNumber);
      break;
    default:
  }

  return { answer, correctAnswer };
};

const runGame = () => {
  common('What is the result of the expression?', levelFlow);
};

export default runGame;
