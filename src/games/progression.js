import runEngine from '../index.js';
import getRandomNumInInterval from '../utils.js';

const makeProgression = () => {
  const start = getRandomNumInInterval(0, 20);
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
const makeRound = () => {
  const { finishProgression, result } = makeProgression();
  const question = `${finishProgression}`;
  const answer = String(result);
  return [question, answer];
};
const runProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, makeRound);
};
export default runProgressionGame;
