import readlineSync from 'readline-sync';
import {getRandomInt} from '../utils';
import {common} from '..';

const MAX = 50;

const levelFlow = () => {    
    let number = getRandomInt(MAX);
    console.log('Question: ' + number);
    let answer = readlineSync.question('Your answer: ');
    let correctAnswer = number % 2 === 0 ? 'yes': 'no';

    return {answer, correctAnswer};
};

const runGame = () => {    
    common('Answer "yes" if the number is even, otherwise answer "no".', levelFlow);
}
export default runGame;