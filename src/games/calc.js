import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const descGame = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const runGameRound = () => {
  const leftOperand = getRandomInt(min, max);
  const rightOperand = getRandomInt(min, max);
  const operation = operations[getRandomInt(min, operations.length - 1)];
  const question = `${leftOperand} ${operation} ${rightOperand}`;

  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = String(leftOperand + rightOperand);
      break;
    case '-':
      correctAnswer = String(leftOperand - rightOperand);
      break;
    case '*':
      correctAnswer = String(leftOperand * rightOperand);
      break;
    default:
  }

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(descGame, runGameRound);
};

export default runGame;
