// Number that we read from forward and backward so find the same

const palindromeNumberFinder = (num) => {
  return num < 0 ? false : num === +num.toString().split("").reverse().join("");
};
