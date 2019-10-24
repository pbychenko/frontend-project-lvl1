import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const generateRoundData = () => {
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
  runApp(gameDescription, generateRoundData);
};

export default runGame;
