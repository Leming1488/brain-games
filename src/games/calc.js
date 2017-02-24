import startGame from '../.';
import randomNumber from '../random-number';

const description = 'What is the result of the expression?';
const operands = ['-', '+', '*'];
const expression = () => {
  const a = randomNumber();
  const b = randomNumber();
  const randomOperand = operands[randomNumber(0, operands.length - 1)];
  return `${a} ${randomOperand} ${b}`;
};

const calculate = (exp) => {
  const [a, operand, b] = exp.split(' ');
  const numberA = parseInt(a, 10);
  const numberB = parseInt(b, 10);
  switch (operand) {
    case '+':
      return numberA + numberB;
    case '-':
      return numberA - numberB;
    case '*':
      return numberA * numberB;
    default:
      return null;
  }
};

const init = () => {
  startGame(description, expression, calculate);
};

export default init;
