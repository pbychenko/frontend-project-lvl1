import readlineSync from 'readline-sync';
import {
  getRandomInt, getProgression, getProgForGame, max, min,
} from '../utils';
import common from '..';

const levelFlow = () => {
  const start = getRandomInt(min, max);
  const step = getRandomInt(min, max);
  const askProgNumber = getRandomInt(min, max - 1);
  const progression = getProgression(start, step);

  console.log(`Question:  ${getProgForGame(progression, askProgNumber)}`);
  const correctAnswer = String(progression[askProgNumber]);
  const answer = readlineSync.question('Your answer: ');

  return { answer, correctAnswer };
};

const runGame = () => {
  common('What number is missing in the progression?', levelFlow);
};

export default runGame;
