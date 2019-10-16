import readlineSync from 'readline-sync';
import {getRandomInt, getNod} from '../utils';
import {common} from '..';

const MAX = 50;

const levelFlow = () => {  
    let firstNumber = getRandomInt(MAX);
    let secondNumber = getRandomInt(MAX);

    console.log(`Question:  ${firstNumber} ${secondNumber}`);        
    let answer = readlineSync.question('Your answer: ');
    let correctAnswer = String(getNod(firstNumber, secondNumber));
    
    return {answer, correctAnswer};
};

const runGame = () => {
    common('Find the greatest common divisor of given numbers.', levelFlow);
};

export default runGame;