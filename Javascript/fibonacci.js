// Third number will be sum of previous two numbers.
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

// console.log(fibonacci(10));

// Recursion Method
function recursionMethod(n) {
  return n <= 1 ? n : recursionMethod(n - 1) + recursionMethod(n - 2);
}

console.log(recursionMethod(8));
