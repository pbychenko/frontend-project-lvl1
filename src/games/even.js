import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const descGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const runGameRound = () => {
  const question = getRandomInt(min, max);
  const correctAnswer = isEven(question);

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(descGame, runGameRound);
};

export default runGame;
