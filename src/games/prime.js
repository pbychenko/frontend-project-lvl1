import readlineSync from 'readline-sync';
import {getRandomInt, isPrime} from '../utils';
import {common} from '..';

const MAX = 50;
const progressionLength = 10;    

const levelFlow = () => {    
    let number = getRandomInt(MAX);
    console.log('Question: ' + number);
    let answer = readlineSync.question('Your answer: ');
    let correctAnswer = isPrime() ? 'yes': 'no';

    return {answer, correctAnswer};  
};

const runGame = () => {
    common('Answer "yes" if given number is prime. Otherwise answer "no".', levelFlow);
};

export default runGame;