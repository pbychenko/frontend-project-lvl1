import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const descGame = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const runGameRound = () => {
  const firstNumber = getRandomInt(min, max);
  const secondNumber = getRandomInt(min, max);
  const operation = operations[getRandomInt(min, operations.length - 1)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;

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

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(descGame, runGameRound);
};

export default runGame;
