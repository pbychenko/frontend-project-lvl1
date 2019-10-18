import readlineSync from 'readline-sync';
import { getRandomInt, max, min } from '../utils';
import common from '..';

const levelFlow = () => {
  const operations = ['+', '-', '*'];
  const firstNumber = getRandomInt(min, max);
  const secondNumber = getRandomInt(min, max);
  const operation = operations[getRandomInt(min, operations.length - 1)];

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
