import startGame from './';
import randomNumber from './random-number';

const gameRules = 'Answer "yes" if number even otherwise answer "no"';
const isEvenNumber = number => number % 2 === 0;
const isCorrectAnswer = (userAnswer, number) => (userAnswer === 'yes' && isEvenNumber(number)) ||
      (userAnswer === 'no' && !isEvenNumber(number));
const correctAnswer = number => (isEvenNumber(number) ? 'yes' : 'no');

const init = () => {
  startGame(gameRules, randomNumber, isCorrectAnswer, correctAnswer);
};

export default init;
