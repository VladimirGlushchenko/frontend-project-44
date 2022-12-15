/* eslint-disable no-console */

import readlineSync from 'readline-sync';

const randomNumber = (min, max) => {
  const ranInt = Math.random() * (max - min) + min;
  return Math.floor(ranInt);
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};

const question = () => {
  const a = randomNumber(10, 30);
  const b = randomNumber(0, 10);
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

export {
  randomNumber, greeting, question,
};
