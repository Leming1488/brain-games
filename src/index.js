import readlineSync from 'readline-sync';

const GAME_COUNT = 3;

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

export const randomNubmer = (min = MIN_NUMBER, max = MAX_NUMBER) => {
  const rand = min + (Math.random() * ((max + 1) - min));
  return Math.floor(rand);
};

export const welcomeUser = (gameRules = '') => {
  console.log(`Welcome to Brain Games!
${gameRules}.`);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  return userName;
};

export const createQuestion = (userName, question, checkAnswer, counter = GAME_COUNT) => {
  if (counter === 0) {
    return console.log(`Congratulation, ${userName}!`);
  }

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (checkAnswer) {
    console.log('Correct!');
    return createQuestion(counter - 1);
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEvenNumber(nubmer) ? 'yes' : 'no'}'.
Let's try again, ${userName}!`);
};
