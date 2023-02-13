import runEngine from '../index.js';
import getRandomNumInInterval from '../utils.js';

const isEven = (num) => num % 2 === 0;
const makeRound = () => {
  const num = getRandomNumInInterval(2, 50);
  const question = num;
  const answer = String(isEven(num) ? 'yes' : 'no');
  return [question, answer];
};
const runEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, makeRound);
};
export default runEvenGame;
