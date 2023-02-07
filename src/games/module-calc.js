import runEngine from '../index.js';
import getRandomNumInInterval from '../utils.js';

function arrayRandElement(array) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
}
const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      console.log('error');
  }
  return sign;
};
const makeRound = () => {
  const operations = ['+', '-', '*'];
  const randOper = arrayRandElement(operations);
  const randNum = getRandomNumInInterval(2, 50);
  const randNum2 = getRandomNumInInterval(0, 10);
  const question = `${randNum} ${randOper} ${randNum2}`;
  const answer = String(calculate(randNum, randNum2, randOper));
  return [question, answer];
};

export default function runCalcGame() {
  const rules = 'What is the result of the expression?';
  runEngine(rules, makeRound);
}
