import readlineSync from 'readline-sync';
import {getRandomInt, getProgression, getProgForGame} from '../utils';
import {common} from '..';

const MAX = 50;
const progressionLength = 10;    

const levelFlow = () => {  
    let start = getRandomInt(progressionLength);
    let step = getRandomInt(progressionLength);
    let askProgNumber = getRandomInt(progressionLength - 1);        
    let progression = getProgression(start, step);
    let correctAnswer = String(progression[askProgNumber]);

    console.log(`Question:  ${getProgForGame(progression, askProgNumber)}`);
    let answer = readlineSync.question('Your answer: ');
        
    return {answer, correctAnswer};    
};

const runGame = () => {
    common('What number is missing in the progression?', levelFlow);
};

export default runGame;