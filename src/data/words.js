import wordBank from "./wordList.txt";
import correctWordBank from "./correctWordsList.txt";

export const boardDefault = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

export const getDailyWord = async () => {
  let dailyWord;

  const date = new Date();
  const offsetDate = new Date(2022, 0, 3, 0, 0, 0, 0);
  const msOffset = date - offsetDate;
  const dayOffset = msOffset / 1000 / 60 / 60 / 24;

  await fetch(correctWordBank)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split(/\r\n|\n/);
        dailyWord = wordArr[Math.floor(dayOffset)];
      });
  return dailyWord;
}

export const getRandomWord = async () => {
  let word;
  await fetch(correctWordBank)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split(/\r\n|\n/);
        word = wordArr[Math.floor(Math.random() * wordArr.length)];
      });
  return word;
}

export const generateWordSet = async () => {
  let wordSet;

  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split(/\r\n|\n/);
      wordSet = new Set(wordArr);
    });
  return wordSet;
};
