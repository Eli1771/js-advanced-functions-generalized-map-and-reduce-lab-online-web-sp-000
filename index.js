// Add your functions here

function map(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

function reduce(arr, init=0) {
  let result = init;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}