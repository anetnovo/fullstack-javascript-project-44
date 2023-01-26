import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');                                                                                                                                                                              
  console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');                                                                                                                                                                   
const isEven = (num) => num % 2 === 0;                                                                                                                                                                                                       
const res = {
   false: 'no',
   true: 'yes',
  };
   //const generateArray = () => (                   
  //  [...new Array(3)]                              
 //    .map(() => Math.round(Math.random() * 20))     
//)
 const arr = [];
 for (let i = 0; i < 3; i += 1) {                     
  arr.push(Math.round(Math.random() * 100));          
}
let attempt = 0;                                         
 for (const num of arr) {                             
  console.log(`Question: ${num}`);                    
const answer = readlineSync.question('Your answer:');                                                    
if ((answer === 'yes' && isEven(num)) || (answer === 'no' && !isEven(num))) {                                                                                                                                                                  
console.log('Correct!');
attempt += 1;
}
if (attempt === 3) console.log(`Congratulations, ${name}!`);                                                                                                                                                                                 
else if ((answer !== 'yes' && isEven(num)) || (answer !== 'no' && !isEven(num))) {                                                                                                                                                             
console.log(`${answer} is wrong answer ;(. Correct answer was ${res[isEven(num)]}.Let's try again, ${name}!`);                                                                                                                               
break;                                                                                                                                                                                                                                     }                                                                                                                                                                                                                                          
}
