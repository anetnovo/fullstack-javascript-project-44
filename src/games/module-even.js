import runEngine from '../index.js';
import getRandomNumInInterval from '../utils.js';

const isEven = (num) => num % 2 === 0;

const res = {
  false: 'no',
  true: 'yes',
};

const makeRound = () => {
  const num = getRandomNumInInterval(2, 50);
  const question = num;
  const answer = String(res[isEven(num)]);
  return [question, answer];
};

export default function runEvenGame() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, makeRound);
}
