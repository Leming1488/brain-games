import readlineSync from 'readline-sync';

const askUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,${userName}!`);
};

export const brainEven = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const GAME_COUNT = 3;

  const randomNubmer = (min, max) => {
    const rand = min + (Math.random() * ((max + 1) - min));
    return Math.floor(rand);
  };

  const isEvenNumber = number => number % 2 === 0;

  console.log(`Welcome to Brain Games!
Answer "yes" if number even otherwise answer "no".`);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  const createQuestion = (counter = 0) => {
    if (counter === GAME_COUNT) {
      return console.log(`Congratulation, ${userName}!`);
    }

    const nubmer = randomNubmer(MIN_NUMBER, MAX_NUMBER);

    console.log(`Question: ${nubmer}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const checkAnswer = (userAnswer === 'yes' && isEvenNumber(nubmer)) ||
            (userAnswer === 'no' && !isEvenNumber(nubmer));

    if (checkAnswer) {
      console.log('Correct!');
      return createQuestion(counter + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEvenNumber(nubmer) ? 'yes' : 'no'}'.
Let's try again, ${userName}!`);
  };

  createQuestion();
};

export default askUser;
