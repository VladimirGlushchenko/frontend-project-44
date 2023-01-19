/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';
import getRandomInRange from '../utils.js';
import { greeting } from '../index.js';

const gameProgression = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arr = [];
    const beginNumber = getRandomInRange(1, 15);
    const stepNumber = getRandomInRange(1, 10);
    let arrNumber = beginNumber;
    arr.push(arrNumber);
    for (let k = 0; k < 9; k += 1) {
      arrNumber += stepNumber;
      arr.push(arrNumber);
    }
    const randomIndex = getRandomInRange(0, 9);
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
