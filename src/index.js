import readlineSync from 'readline-sync';

export const common = (gameName, levelFlow) => {
    let attemptCount = 3;
    console.log('Welcome to the Brain Games!');
    console.log(gameName);

    const name = readlineSync.question('May I have your name? ');
    console.log('Hello ' + name + '!' + '\n');

    while (attemptCount > 0) {
        let {answer, correctAnswer} = levelFlow();

        if (answer === correctAnswer) {
            console.log('Correct!');
            attemptCount -= 1;
            continue;
        }
        
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        break;
    }

    if (attemptCount === 0) {
        console.log(`Congratulations, ${name}!`);
    }
};

