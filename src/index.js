import readlineSync from 'readline-sync';
import getName from './cli.js';

export default function runEngine(rules, makeRound) {
  const roundsCount = 3;
  const username = getName();
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [questionExpression, correctAnswer] = makeRound();
    console.log(`Question: ${questionExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) console.log('Correct!');
    else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
}
