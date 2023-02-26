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
  const randomOperator = getRandomOperator();
  const randomNum = getRandomNumInInterval(2, 50);
  const randomNum2 = getRandomNumInInterval(0, 10);
  const question = `${randomNum} ${randomOperator} ${randomNum2}`;
  const answer = String(calculate(randomNum, randomNum2, randomOperator));
  return [question, answer];
};

const runCalcGame = () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, makeRound);
};

export default runCalcGame;
