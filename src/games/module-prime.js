import readlineSync from 'readline-sync';
import {
  getName, randomNum, printTask, printQuestion, congrats, wrongAnswer,
} from '../index.js';

export default function game() {
  const name = getName();
  printTask('Answer "yes" if given number is prime. Otherwise answer "no".');
  const primeCheck = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  const sayPrimeOrNot = (num) => {
    const text = primeCheck(num) ? 'yes' : 'no';
    return text;
  };
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const number = randomNum();
    printQuestion(number);
    const result = sayPrimeOrNot(number);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) console.log('Correct!');
    if (attempt === 3 && answer === result) congrats(name);
    else if (answer !== result) {
      wrongAnswer(answer, result, name);
      break;
    }
  }
}
