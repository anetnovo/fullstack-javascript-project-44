import getRandomNumInInterval from '../utils.js';
import runEngine from '../index.js';

const GCD = (num1, num2) => {
  if (num2 === 0) return num1;
  return GCD(num2, num1 % num2);
};
const makeRound = () => {
  const randNum = getRandomNumInInterval(1, 90);
  const randNum2 = getRandomNumInInterval(1, 120);
  const question = `${randNum} ${randNum2}`;
  const answer = String(GCD(randNum2, randNum));
  return [question, answer];
};

export default function runGCDgame() {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, makeRound);
}
