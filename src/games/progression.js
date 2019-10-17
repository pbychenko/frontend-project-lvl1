import readlineSync from 'readline-sync';
import {
  getRandomInt, getProgression, getProgForGame, max,
} from '../utils';
import common from '..';

const levelFlow = () => {
  const start = getRandomInt(max);
  const step = getRandomInt(max);
  const askProgNumber = getRandomInt(max - 1);
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
