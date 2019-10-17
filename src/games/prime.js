import readlineSync from 'readline-sync';
import { getRandomInt, isPrime } from '../utils';
import common from '..';

const MAX = 50;

const levelFlow = () => {
  const number = getRandomInt(MAX);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { answer, correctAnswer };
};

const runGame = () => {
  common('Answer "yes" if given number is prime. Otherwise answer "no".', levelFlow);
};

export default runGame;
