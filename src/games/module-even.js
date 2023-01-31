import readlineSync from 'readline-sync';
import {
  getName, randomNum, printTask, printQuestion, congrats, wrongAnswer,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

export default function game() {
  const name = getName();
  printTask('Answer "yes" if the number is even, otherwise answer "no".');
  const res = {
    false: 'no',
    true: 'yes',
  };
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const num = randomNum();
    printQuestion(num);
    const answer = readlineSync.question('Your answer:');
    if ((answer === 'yes' && isEven(num)) || (answer === 'no' && !isEven(num))) {
      console.log('Correct!');
    }
    if (attempt === 3) congrats(name);
    else if ((answer !== 'yes' && isEven(num)) || (answer !== 'no' && !isEven(num))) {
      wrongAnswer(answer, res[isEven(num)], name);
      break;
    }
  }
}