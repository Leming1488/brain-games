import startGame from './';
import randomNumber from './random-number';

const gameRules = 'Answer "yes" if number even otherwise answer "no"';
const question = randomNumber();

const isEvenNumber = number => number % 2 === 0;
const isCorrectAnswer = (userAnswer, number) => (userAnswer === 'yes' && isEvenNumber(number)) ||
                                  (userAnswer === 'no' && !isEvenNumber(number));
const correctAnswer = number => (isEvenNumber(number) ? 'yes' : 'no');

export default startGame(gameRules, question, isCorrectAnswer, correctAnswer);
