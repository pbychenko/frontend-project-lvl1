import readlineSync from 'readline-sync';
import { getRandomInt, max } from '../utils';
import common from '..';

const levelFlow = () => {
  const operations = ['+', '-', '*'];
  const firstNumber = getRandomInt(max);
  const secondNumber = getRandomInt(max);
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
