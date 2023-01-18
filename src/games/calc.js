/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import getRandomInRange from '../utils.js';
import greeting from '../index.js';

const question = () => {
  const a = getRandomInRange(10, 30);
  const b = getRandomInRange(0, 10);
  let result;
  let resultString;
  if (Math.random() < 0.33) {
    result = a + b;
    resultString = `${a} + ${b}`;
  } else if (Math.random() > 0.66) {
    result = a - b;
    resultString = `${a} - ${b}`;
  } else {
    result = a * b;
    resultString = `${a} * ${b}`;
  }
  console.log(`Question: ${resultString}`);
  return result;
};

const gameCalc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const resQue = question();
    const answerUser = readlineSync.question('Your answer: ');
    if (resQue === Number(answerUser)) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${resQue}.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export { gameCalc };
