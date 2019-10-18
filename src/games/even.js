import readlineSync from 'readline-sync';
import { getRandomInt, max, min } from '../utils';
import common from '..';

const levelFlow = () => {
  const number = getRandomInt(min, max);
  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return { answer, correctAnswer };
};

const runGame = () => {
  common('Answer "yes" if the number is even, otherwise answer "no".', levelFlow);
};

export default runGame;
