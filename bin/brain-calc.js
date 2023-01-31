import readlineSync from 'readline-sync';
import {
  getName, randomNum, printTask, printQuestion, congrats, wrongAnswer,
} from '../src/index.js';

const name = getName();
printTask('What is the result of the expression?');

const operations = ['+', '-', '*'];

function arrayRandElement(array) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

for (let attempt = 1; attempt <= 3; attempt += 1) {
  const randOper = arrayRandElement(operations);
  const randNum = randomNum();
  const randNum2 = randomNum();
  printQuestion(`${randNum}  ${randOper}  ${randNum + randNum2}`);
  const result = eval(`${randNum}  ${randOper}  ${randNum + randNum2}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === result) console.log('Correct!');
  if (attempt === 3) congrats(name);
  else if (Number(answer) !== result) {
    wrongAnswer(answer, result, name);
    break;
  }
}
