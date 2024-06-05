// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// 풀이 1.
function capitalize(str) {
  const arr = str.split(" ");
  const words = [];

  for (let char of arr) {
    words.push(char[0].toUpperCase() + char.slice(1));
  }

  return words.join(" ");
}

module.exports = capitalize;
