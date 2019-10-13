import readlineSync from 'readline-sync';
import {getRandomInt, getProgression, getProgForGame} from '../utils';

const runGame = () => {
    const MAX = 50;
    let attemptCount = 3;
    let progressionLength = 10;    

    console.log('Welcome to the Brain Games!');
    console.log('What number is missing in the progression?');

    const name = readlineSync.question('May I have your name? ');
    console.log('Hello ' + name + '!' + '\n');

    while (attemptCount > 0) {
        let start = getRandomInt(progressionLength);
        let step = getRandomInt(progressionLength);
        let askProgNumber = getRandomInt(progressionLength - 1);        
        let progression = getProgression(start, step);
        let correctAnswer = String(progression[askProgNumber]);

        console.log(`Question:  ${getProgForGame(progression, askProgNumber)}`);        
        let answer = readlineSync.question('Your answer: ');

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