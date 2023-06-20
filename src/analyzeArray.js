export default function analyzeArray(array) {
  const sortedArray = array.sort();
  const average = array.reduce((avg, item) => avg + item) / array.length;
  const min = sortedArray[0];
  const max = sortedArray[array.length - 1];
  const { length } = array;

  return {
    average,
    min,
    max,
    length,
  };
}
