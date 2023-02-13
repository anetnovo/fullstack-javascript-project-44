import runEngine from '../index.js';
import getRandomNumInInterval from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumInInterval(0, operators.length - 1)];
};
const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Operator ${sign} - is incorrect!`);
  }
};
const makeRound = () => {
  const randOper = getRandomOperator();
  const randNum = getRandomNumInInterval(2, 50);
  const randNum2 = getRandomNumInInterval(0, 10);
  const question = `${randNum} ${randOper} ${randNum2}`;
  const answer = String(calculate(randNum, randNum2, randOper));
  return [question, answer];
};

const runCalcGame = () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, makeRound);
};
export default runCalcGame;
