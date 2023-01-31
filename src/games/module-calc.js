import readlineSync from 'readline-sync';
import {
  getName, randomNum, printTask, printQuestion, congrats, wrongAnswer,
} from '../index.js';

export default function game() {
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
    printQuestion(`${randNum} ${randOper} ${randNum2}`);
    const result = eval(`${randNum} ${randOper} ${randNum2}`);
    const answer = readlineSync.question('Your answer: ');
    const checkAnswer = Number(answer) === result;
    if (checkAnswer) console.log('Correct!');
    if (attempt === 3 && checkAnswer) congrats(name);
    else if (!checkAnswer) {
      wrongAnswer(answer, result, name);
      break;
    }
  }
}
