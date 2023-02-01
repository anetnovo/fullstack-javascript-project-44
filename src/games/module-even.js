import readlineSync from 'readline-sync';
import {
  getRandomNumInInterval, getName, printTask, printQuestion, congrats, wrongAnswer,
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
    const num = getRandomNumInInterval(2, 50);
    printQuestion(num);
    const answer = readlineSync.question('Your answer: ');
    const checkAnswer = (answer === 'yes' && isEven(num)) || (answer === 'no' && !isEven(num));
    if (checkAnswer) {
      console.log('Correct!');
    }
    if (attempt === 3 && checkAnswer) congrats(name);
    else if (!checkAnswer) {
      wrongAnswer(answer, res[isEven(num)], name);
      break;
    }
  }
}
