#!/usr/bin/env node
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

const min = 0;
const max = 100;
const randomNumber = () => {
  const ranInt = Math.random() * (max - min) + min;
  return Math.floor(ranInt);
};

const yesOrNo = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const ranInt = randomNumber();
    console.log(`Question: ${ranInt}`);
    const answer = readlineSync.question('Your answer: ');
    if (ranInt % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        return;
      }
    } else if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

yesOrNo();
