import readlineSync from 'readline-sync';

const runGame = () => {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const MAX = 50;
    let attemptCount = 3;

    console.log('Welcome to the Brain Games!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const name = readlineSync.question('May I have your name? ');
    console.log('Hello ' + name + '!' + '\n');

    while (attemptCount > 0) {
        let number = getRandomInt(MAX);
        console.log('Question: ' + number);
        let answer = readlineSync.question('Your answer: ');
        let correctAnswer = number % 2 === 0 ? 'yes': 'no';

        if ((number % 2 === 0 && answer === correctAnswer) || (number % 2 === 1 && answer === correctAnswer)) {
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
}
export default runGame;