import readlineSync from 'readline-sync';

const testGame = () => {
    console.log('Welcome to the Brain Games!');
    let name   = readlineSync.question('May I have your name? ')
    console.log('Hello ' + name + '!');
}

const testGame1 = () => {
}

export default testGame;
