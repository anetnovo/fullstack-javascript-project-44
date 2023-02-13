import runEngine from '../index.js';
import getRandomNumInInterval from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const number = getRandomNumInInterval(2, 60);
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};
const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, makeRound);
};
export default runPrimeGame;
