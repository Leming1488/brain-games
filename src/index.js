import readlineSync from 'readline-sync';

const GAME_COUNT = 3;

const welcomeUser = (gameRules = '') => {
  console.log(`Welcome to Brain Games!
${gameRules}`);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  return userName;
};

const startGames = (gameRules, expression, isCorrectAnswer, correctAnswer) => {
  const userName = welcomeUser(gameRules);

  const createQuestion = (counter = GAME_COUNT) => {
    if (counter === 0) {
      return console.log(`Congratulation, ${userName}!`);
    }
    const question = expression();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isCorrectAnswer(userAnswer, question)) {
      console.log('Correct!');
      return createQuestion(counter - 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)}'.
Let's try again, ${userName}!`);
  };

  createQuestion();
};

export default startGames;