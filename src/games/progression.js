import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getQuestion = (list, position) => {
  const buff = list.slice();
  buff[position] = '..';
  return buff.join(' ');
};

const generateRoundData = () => {
  const start = getRandomInt(min, max);
  const step = getRandomInt(min, max);
  const progression = getProgression(start, step, progressionLength);
  const hiddenElementPosition = getRandomInt(0, progressionLength - 1);
  const question = getQuestion(progression, hiddenElementPosition);
  const correctAnswer = String(progression[hiddenElementPosition]);

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(gameDescription, generateRoundData);
};

export default runGame;
