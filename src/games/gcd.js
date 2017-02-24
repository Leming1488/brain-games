import startGame from '../.';
import randomNumber from '../random-number';

const description = 'Find the greatest common divisor of given numbers.';
const expression = () => {
  const a = randomNumber();
  const b = randomNumber();
  return `${a}  ${b}`;
};

const calculate = (exp) => {
  const [a, b] = exp.split(' ').sort((x, z) => z - x);
  const numberA = parseInt(a, 10);
  const numberB = parseInt(b, 10);
  const gcd = (c, d) => (d === 0 ? c : gcd(d, c % d));
  return gcd(numberA, numberB);
};

const init = () => {
  startGame(description, expression, calculate);
};

export default init;
