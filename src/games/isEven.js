import runEngine from '../index.js';
import getRandomNumInInterval from '../utils.js';

const isEven = (num) => num % 2 === 0;

const makeRound = () => {
  const randomNum = getRandomNumInInterval(2, 50);
  const question = randomNum;
  const answer = String(isEven(randomNum) ? 'yes' : 'no');
  return [question, answer];
};

const runEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, makeRound);
};

export default runEvenGame;
