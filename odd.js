const isOdd = function (num) {
  return num % 3 === 0 && num % 2 !== 0;
}

const valueAssign = isOdd(60);
console.log(valueAssign);
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
