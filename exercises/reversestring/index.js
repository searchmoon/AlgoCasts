// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 풀이 1.
function reverse(str) {
  return str.split("").reverse().join("");
}

// 풀이 2. reduce 메서드 를 사용한 풀이
// function reverse(str) {
//     debugger;
//   return str
//     .split("")
//     .reduce((reversed, character) => character + reversed, "");
// }

// 풀이 3. 반복문을 통해 문자열을 하나씩 붙이기.
// function reverse(str) {
//     let reversed = '';

//     for(let char of str){
//         reversed = char + reversed;
//     }

//     return reversed;
// }

module.exports = reverse;
