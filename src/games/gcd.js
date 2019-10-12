import readlineSync from 'readline-sync';
import {getRandomInt, getNod} from '../utils';

const runGame = () => {
    const MAX = 50;
    let attemptCount = 3;

    console.log('Welcome to the Brain Games!');
    console.log('Find the greatest common divisor of given numbers.');

    const name = readlineSync.question('May I have your name? ');
    console.log('Hello ' + name + '!' + '\n');

    while (attemptCount > 0) {
        let firstNumber = getRandomInt(MAX);
        let secondNumber = getRandomInt(MAX);

        console.log(`Question:  ${firstNumber} ${secondNumber}`);        
        let answer = readlineSync.question('Your answer: ');
        let correctAnswer = String(getNod(firstNumber, secondNumber));

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