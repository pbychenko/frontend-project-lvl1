import readlineSync from 'readline-sync';

const attemptsCount = 3;

const runApp = (gameName, levelFlow) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameName);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!\n`);

  for (let i = 0; i < attemptsCount; i += 1) {
    const { question, correctAnswer } = levelFlow();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runApp;
