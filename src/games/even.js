import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils';
import common from '..';

const MAX = 50;

const levelFlow = () => {
  const number = getRandomInt(MAX);
  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return { answer, correctAnswer };
};

const runGame = () => {
  common('Answer "yes" if the number is even, otherwise answer "no".', levelFlow);
};

export default runGame;
