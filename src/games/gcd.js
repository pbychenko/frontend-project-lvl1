import readlineSync from 'readline-sync';
import {
  getRandomInt, getNod, max, min,
} from '../utils';
import common from '..';

const levelFlow = () => {
  const firstNumber = getRandomInt(min, max);
  const secondNumber = getRandomInt(min, max);

  console.log(`Question:  ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = String(getNod(firstNumber, secondNumber));

  return { answer, correctAnswer };
};

const runGame = () => {
  common('Find the greatest common divisor of given numbers.', levelFlow);
};

export default runGame;
