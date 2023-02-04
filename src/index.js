/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */

import readlineSync from 'readline-sync';
/* import getRandomInRange from './utils.js'; */

/*
не понимаю что мне в первом пунке по правкам надо добавить в файл ридми
(Как скачать проект, как установить, как запустить.).
В этом модуле я приятно удивлен, как красиво можно было все сделать
*/
const gameEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(rules);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(question);
    const answerUser = readlineSync.question('Your answer: ');
    if (answer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default gameEngine;

/*
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};

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

export {
  greeting, question,
};
*/
