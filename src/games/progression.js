import readlineSync from 'readline-sync';
import { getRandomInt, getProgression, getProgForGame } from '../utils';
import common from '..';

const progressionLength = 10;

const levelFlow = () => {
  const start = getRandomInt(progressionLength);
  const step = getRandomInt(progressionLength);
  const askProgNumber = getRandomInt(progressionLength - 1);
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
