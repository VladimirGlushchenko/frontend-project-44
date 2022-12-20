/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import { greeting, randomNumber } from '../index.js';

const gameProgression = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arr = [];
    const beginNumber = randomNumber(1, 15);
    const stepNumber = randomNumber(1, 10);
    let arrNumber = beginNumber;
    arr.push(arrNumber);
    for (let k = 0; k < 9; k += 1) {
      arrNumber += stepNumber;
      arr.push(arrNumber);
    }
    const randomIndex = randomNumber(0, 9);
    const correctNumber = arr[randomIndex];
    arr[randomIndex] = '..';
    console.log(`Question: ${arr.join(' ')}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctNumber === Number(answerUser)) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctNumber}'.\nLet's try again, ${name}!`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export { gameProgression };
