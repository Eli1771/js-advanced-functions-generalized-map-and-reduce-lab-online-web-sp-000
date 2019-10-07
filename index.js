// Add your functions here

function map(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

function reduce(arr, fn, init) {
  if (!!init) {
    let result
  }
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
}