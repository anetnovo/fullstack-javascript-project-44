import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
export const getRandomNumInInterval = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const randomNum = () => {
  const arr = [];
  const rand = Math.floor(Math.random() * 10);
  for (let i = 0; i < 15; i += 1) {
    arr.push(Math.round(Math.random() * 20));
  }
  return arr[rand];
};
export const printTask = (sentence) => {
  console.log(sentence);
};
export const printQuestion = (ques) => {
  console.log(`Question: ${ques}`);
};
export const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};
export const wrongAnswer = (answ, correct, username) => {
  console.log(`${answ} is wrong answer ;(. Correct answer was ${correct}.Let's try again, ${username}!`);
};
