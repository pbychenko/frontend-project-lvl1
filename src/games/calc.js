import readlineSync from 'readline-sync';
import {getRandomInt} from '../utils';
import {common} from '..';

const MAX = 50;

const levelFlow = () => {
    const operations = ['+', '-', '*'];
    let firstNumber = getRandomInt(MAX);
    let secondNumber = getRandomInt(MAX);
    let operation = operations[getRandomInt(2)];

    console.log(`Question:  ${firstNumber} ${operation} ${secondNumber}`);        
    let answer = readlineSync.question('Your answer: ');
    let correctAnswer;
    switch(operation) {
        case '+':
            correctAnswer = String(firstNumber + secondNumber);
            break;
        case '-':
            correctAnswer = String(firstNumber - secondNumber);
            break;
        case '*':
            correctAnswer = String(firstNumber * secondNumber);
    }

    return {answer, correctAnswer};
};

const runGame = () => {
    common('What is the result of the expression?', levelFlow);
};

export default runGame;