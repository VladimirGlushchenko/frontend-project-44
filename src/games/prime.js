/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';
import getRandomInRange from '../utils.js';
import greeting from '../index.js';

const isPrime = (num) => {
  if (num === 0 || num === 1) { return false; }
  if (num === 2) { return true; }

  for (let k = 2; k < num; k += 1) {
    if (num % k === 0) { return false; }
  }
  return true;
};

const boolValueString = (bool) => {
  if (bool === true) { return 'yes'; }
  return 'no';
};

const stringToBool = (str) => {
  if (str === 'yes') { return true; }
  return false;
};

const gamePrime = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const a = getRandomInRange(0, 60);
    console.log(`Question: ${a}`);
    const boolValue = isPrime(a);
    const answerUser = readlineSync.question('Your answer: ');
    const boolAnswer = stringToBool(answerUser);
    if (boolValue === boolAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${boolValueString(boolValue)}'.\nLet's try again, ${name}!`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export { gamePrime };
