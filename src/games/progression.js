import startGame from '../.';
import randomNumber from '../random-number';

const PROGRESS_LENGTH = 10;
const progression = (number, add, arr = [], length = PROGRESS_LENGTH) => (arr.length >= length ?
                                        arr : progression(number + add, add, [...arr, number]));

const description = 'What number is missing in this progression?';
const expression = () => {
  const start = randomNumber(0, 10);
  const add = randomNumber(0, 10);
  const arr = progression(start, add);
  const index = randomNumber(0, PROGRESS_LENGTH);
  arr.splice(index, 1, '..');
  return arr;
};

const calculate = (exp) => {
  const index = exp.indexOf('..');
  const newArr = [...exp];
  newArr.splice(index, 1);
  const d = newArr[1] - newArr[0] === newArr[2] - newArr[1] ?
            newArr[2] - newArr[1] : newArr[3] - newArr[2];
  const a1 = index !== 0 ? newArr[0] : newArr[1] - d;
  return progression(a1, d)[index];
};

const init = () => {
  startGame(description, expression, calculate);
};

export default init;
