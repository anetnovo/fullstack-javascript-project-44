import readlineSync from 'readline-sync';
import {
  getRandomNumInInterval, getName, randomNum, printTask, printQuestion, congrats, wrongAnswer,
} from '../index.js';

const makeProgression = () => {
  const start = randomNum();
  const hide = getRandomNumInInterval(0, 10);
  const step = getRandomNumInInterval(1, 15);
  const prog = [];
  for (let i = start; i <= 10 * step + start; i += step) {
    prog.push(i);
  }
  const result = prog[hide];
  prog[hide] = '..';
  const finishProgression = prog.toString().replace(/,/g, ' ');
  return { finishProgression, result };
};

export default function game() {
  const name = getName();
  printTask('What number is missing in the progression?');
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const { finishProgression, result } = makeProgression();
    printQuestion(`${finishProgression}`);
    const correctAnswer = result;
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === correctAnswer) console.log('Correct!');
    if (attempt === 3 && Number(answer) === correctAnswer) congrats(name);
    else if (Number(answer) !== correctAnswer) {
      wrongAnswer(answer, correctAnswer, name);
      break;
    }
  }
}
