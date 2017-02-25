import startGame from '../.';
import randomNumber from '../random-number';

const description = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 1) {
    return 'no';
  }
  const prime = (d) => {
    if (d === 1) {
      return 'yes';
    }
    return number % d === 0 ? 'no' : prime(d - 1);
  };
  return prime(number - 1);
};

const init = () => {
  startGame(description, randomNumber, isPrimeNumber);
};

export default init;
