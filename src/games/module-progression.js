import readlineSync from 'readline-sync';
import {
  getName, randomNum, printTask, printQuestion, congrats, wrongAnswer,
} from '../index.js';

export default function game() {
  const name = getName();
  printTask('What number is missing in the progression?');
  const getIndex = () => {
    const arr = [];
    const rand = Math.floor(Math.random() * 10);
    for (let i = 0; i < 10; i += 1) {
      arr.push(Math.round(Math.random() * 10));
    }
    return arr[rand];
  };
  const makeProgression = () => {
    const start = randomNum();
    const hide = getIndex();
    const step = randomNum();
    const prog = [];
    for (let i = start; i <= 10 * step + start; i += step) {
      prog.push(i);
    }
    const result = prog[hide];
    prog[hide] = '..';
    const finishProgression = prog.toString().replace(/,/g, ' ');
    return { finishProgression, result };
  };
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const { finishProgression, result } = makeProgression();
    printQuestion(finishProgression);
    const result2 = result;
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === result2) console.log('Correct!');
    if (attempt === 3 && Number(answer) === result2) congrats(name);
    else if (Number(answer) !== result2) {
      wrongAnswer(answer, result2, name);
      break;
    }
  }
}