import runEngine from '../index.js';
import getRandomNumInInterval from '../utils.js';

const makeProgression = (begin, step, length) => {
  const prog = [];
  for (let i = begin; i <= length * step + begin; i += step) {
    prog.push(i);
  }
  return prog;
};

const makeRound = () => {
  const start = getRandomNumInInterval(0, 20);
  const act = getRandomNumInInterval(1, 15);
  const size = getRandomNumInInterval(5, 10);
  const hiddenIndex = getRandomNumInInterval(0, size);
  const progression = makeProgression(start, act, size);
  const result = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const preparedProgression = progression.join(' ');
  const question = `${preparedProgression}`;
  const answer = String(result);
  return [question, answer];
};

const runProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, makeRound);
};

export default runProgressionGame;
