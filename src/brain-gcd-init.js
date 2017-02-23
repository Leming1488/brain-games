import startGame from './';
import randomNumber from './random-number';

const gameRules = 'Find the greatest common divisor of given numbers.';
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

const isCorrectAnswer = (userAnswer, number) => (userAnswer === `${calculate(number)}`);
const correctAnswer = number => calculate(number);

const init = () => {
  startGame(gameRules, expression, isCorrectAnswer, correctAnswer);
};

export default init;
