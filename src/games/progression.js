import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 5;

const getProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = start + step * i;
  }
  return progression;
};

const getRoundProgression = (list, position) => {
  const buff = list.slice();
  buff[position] = '..';
  return buff.join(' ');
};

const generateRoundData = () => {
  const start = getRandomInt(min, max);
  const step = getRandomInt(min, max);
  const progression = getProgression(start, step);
  const questionPosition = getRandomInt(0, progression.length - 1);
  const question = `${getRoundProgression(progression, questionPosition)}`;
  const correctAnswer = String(progression[questionPosition]);

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(gameDescription, generateRoundData);
};

export default runGame;
