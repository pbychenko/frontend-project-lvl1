import readlineSync from 'readline-sync';
import {getRandomInt} from '../utils'

const runGame = () => {
    const MAX = 50;
    let attemptCount = 3;

    console.log('Welcome to the Brain Games!');
    console.log('What is the result of the expression?');

    const name = readlineSync.question('May I have your name? ');
    console.log('Hello ' + name + '!' + '\n');
    const operations = ['+', '-', '*'];

    while (attemptCount > 0) {
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

        if (answer === correctAnswer) {
            console.log('Correct!');
            attemptCount -= 1;
            continue;    
        }
        console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        break;    
    }

    if (attemptCount === 0) {
        console.log(`Congratulations, ${name}!`);
    }
};

export default runGame;