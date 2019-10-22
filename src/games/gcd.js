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
  const firstNumber = getRandomInt(min, max);
  const secondNumber = getRandomInt(min, max);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(descGame, runGameRound);
};

export default runGame;
