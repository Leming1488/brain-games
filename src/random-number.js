const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const randomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => {
  const rand = min + (Math.random() * ((max + 1) - min));
  return Math.floor(rand);
};

export default randomNumber;
