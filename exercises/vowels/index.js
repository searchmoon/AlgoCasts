// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//풀이 1.
function vowels(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

//풀이 2. 정규표현식
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
// g는 global을 의미한다. i는 insensitive 를 의미하며, 대소문자를 구분하지 않는다는 뜻.
// matches 가 일치하는것이 없다면, null 을 반환하기 때문에, 삼항연산자 사용해서 0을 표현해줌.

// 풀이 3. 정규표현식
function vowels(str) {
  const regex = /^[aeiou]*$/;
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (regex.test(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vowels;
