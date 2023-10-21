const wordsByNameAZ = (arr) => {
  return arr.filter((item) => isNaN(item)).sort((a, b) => a.localeCompare(b));
};

const wordsByLength = (arr) => {
  return arr.filter((item) => isNaN(item)).sort((a, b) => a.length - b.length);
};

const uniqueWords = (arr) => {
  return arr
    .filter((item) => isNaN(item))
    .reduce((acc, el) => {
      if (!acc.includes(el)) {
        acc.push(el);
      }
      return acc;
    }, []);
};
const uniqueValues = (arr) => {
  return arr.reduce((acc, el) => {
    if (!acc.includes(el)) {
      acc.push(el);
    }
    return acc;
  }, []);
};

const digitsASC = (arr) => {
  return arr.filter((item) => Number(item)).sort((a, b) => a - b);
};
const digitsDESC = (arr) => {
  return arr.filter((item) => Number(item)).sort((a, b) => b - a);
};

module.exports = {
  wordsByNameAZ,
  wordsByLength,
  uniqueWords,
  uniqueValues,
  digitsASC,
  digitsDESC,
};
