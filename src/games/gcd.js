import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const descGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let x = a;
  let y = b;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

const runGameRound = () => {
  const firstOperand = getRandomInt(min, max);
  const secondOperand = getRandomInt(min, max);
  const question = `${firstOperand} ${secondOperand}`;
  const correctAnswer = String(getGcd(firstOperand, secondOperand));

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(descGame, runGameRound);
};

export default runGame;
