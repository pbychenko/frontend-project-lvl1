import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const descGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 4) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const runGameRound = () => {
  const question = getRandomInt(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(descGame, runGameRound);
};

export default runGame;
