import startGame from '../';
import randomNumber from '../random-number';

const description = 'Balance the given number.';
const expression = () => {
  const a = randomNumber(100, 1000);
  return `${a}`;
};

const balance = (number) => {
  const numbers = `${number}`.split('').map(el => parseInt(el, 10));
  const maxFromArr = arr => Math.max(...arr);
  const minFromArr = arr => Math.min(...arr);
  const dicrease = (arr) => {
    const newArr = arr.slice();
    const max = maxFromArr(newArr);
    const min = minFromArr(newArr);
    if (max - min > 1) {
      newArr.splice(newArr.indexOf(max), 1, max - 1);
      newArr.splice(newArr.indexOf(min), 1, min + 1);
      return dicrease(newArr);
    }
    return newArr.sort((a, b) => a - b).join('');
  };
  return dicrease(numbers);
};
const isCorrectAnswer = (userAnswer, number) => (userAnswer === `${balance(number)}`);
const correctAnswer = number => balance(number);

const init = () => {
  startGame(description, expression, isCorrectAnswer, correctAnswer);
};

export default init;
