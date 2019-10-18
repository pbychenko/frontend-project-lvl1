import readlineSync from 'readline-sync';
import {
  getRandomInt, isPrime, max, min,
} from '../utils';
import common from '..';

const levelFlow = () => {
  const number = getRandomInt(min, max);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { answer, correctAnswer };
};

const runGame = () => {
  common('Answer "yes" if given number is prime. Otherwise answer "no".', levelFlow);
};

export default runGame;
