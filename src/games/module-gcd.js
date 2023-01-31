import readlineSync from 'readline-sync';
import {
  getName, randomNum, printTask, printQuestion, congrats, wrongAnswer,
} from '../index.js';

const GCD = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (x && y) x > y ? x %= y : y %= x;
  x += y;
  return x;
};
export default function game() {
  const name = getName();
  printTask('Find the greatest common divisor of given numbers.');
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const randNum = randomNum();
    const randNum2 = randomNum();
    printQuestion(`${randNum}  ${randNum2}`);
    const result = GCD(randNum2, randNum);
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
