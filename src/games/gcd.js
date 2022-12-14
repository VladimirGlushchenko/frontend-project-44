/* eslint-disable import/prefer-default-export */
/* eslint-disable no-const-assign */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';
import { greeting, randomNumber } from '../index.js';

const gameGcd = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const a = randomNumber(1, 100);
    const b = randomNumber(1, 100);
    const resultString = `${a} ${b}`;
    console.log(`Question: ${resultString}`);
    const answerUser = readlineSync.question('Your answer: ');
    const arrA = [];
    const arrB = [];
    for (let j = 1; j <= a; j += 1) {
      if (a % j === 0) {
        arrA.push(j);
      }
    }
    for (let j = 1; j <= b; j += 1) {
      if (b % j === 0) {
        arrB.push(j);
      }
    }
    const intersection = arrA.filter((x) => arrB.includes(x));
    const maxValue = Math.max.apply(null, intersection);
    if (maxValue === Number(answerUser)) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${maxValue}'.\nLet's try again, ${name}!`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export { gameGcd };
