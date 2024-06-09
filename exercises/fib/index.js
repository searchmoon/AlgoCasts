// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 만약 n 이 4라면, 4번째꺼까지 더한다는 뜻이기때문에,
// 3번만 반복문을 실행하고, 마지막꺼를 반환.
// 다음수가 n 이라면, n - 2번째와, n - 1번째를 더한것
//풀이 1.
function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[result.length - 1];
}

// //풀이 2.
function fib(n) {
  let first = 0;
  let second = 1;
  let next;

  if (n <= 1) return n;

  for (let i = 1; i < n; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  return next;
}

//풀이 3. n이 커질수록 시간복잡도(O(2^n)) 아주 높음(추천방법 아님)
function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

//풀이 4. 풀이 3.을 메모이제이션하는 방법으로 - O(n)만큼 소요. 함수 내부에서 구현
function fib(n, memo = {}) {
  if (n < 2) return n;
  if (memo[n]) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

//풀이 5. 풀이 3에 메모이제이션을 별도 함수로 구현

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}
// memoize함수는 고차함수로, 피보나치 함수 자체를 인자로 받아서 메모이제이션 기능을 추가한다.

function slowFib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
