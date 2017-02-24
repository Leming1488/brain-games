import startGame from '../.';
import randomNumber from '../random-number';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEvenNumber = number => (number % 2 === 0 ? 'yes' : 'no');

const init = () => {
  startGame(description, randomNumber, isEvenNumber);
};

export default init;
