import { getRandomInt, max, min } from '../utils';
import runApp from '..';

const descGame = 'What number is missing in the progression?';
const getProgression = (start, step) => {
  const progressionList = [];
  for (let i = 0; i < max; i += 1) {
    progressionList[i] = start + step * i;
  }
  return progressionList;
};

const getProgForGame = (list, place) => {
  const buff = list.slice();
  buff[place] = '..';
  return buff.join(' ');
};

const runGameRound = () => {
  const start = getRandomInt(min, max);
  const step = getRandomInt(min, max);
  const askProgNumber = getRandomInt(min, max - 1);
  const progression = getProgression(start, step);
  const question = `${getProgForGame(progression, askProgNumber)}`;
  const correctAnswer = String(progression[askProgNumber]);

  return { question, correctAnswer };
};

const runGame = () => {
  runApp(descGame, runGameRound);
};

export default runGame;
