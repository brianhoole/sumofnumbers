const testList = [1, 2, 3, 4];

function sumFor(array) {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum;
}

function sumWhile(wArray) {
  let sum = 0;
  let i = 0;
  while (wArray[i] != null) {
    sum += wArray[i];
    i++;
  }
  return sum;
}

function sumRecursion(sArray) {
  if (sArray.length === 0) {
    return 0;
  }
  return sArray[0] + sumRecursion(sArray.slice(1, sArray.length));
}

function sumTheSimpleWay(uArray) {
  return _.reduce(uArray, (memo, num) => memo + num, 0);
}
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
