export default function analyzeArray(array) {
  return {
    average: array.reduce((sum, n) => sum + n, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}