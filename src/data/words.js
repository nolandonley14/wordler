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

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split(/\r\n|\n/);
      wordSet = new Set(wordArr);
    });
  await fetch(correctWordBank)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split(/\r\n|\n/);
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      });
  return { wordSet, todaysWord };
};
