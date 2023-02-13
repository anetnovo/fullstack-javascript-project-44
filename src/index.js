import readlineSync from 'readline-sync';

export default function runEngine(rules, makeRound) {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) console.log('Correct!');
    else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
}
