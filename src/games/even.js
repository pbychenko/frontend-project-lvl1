import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const question = getRandomInt(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(gameDescription, generateRoundData);
};

export default runGame;
