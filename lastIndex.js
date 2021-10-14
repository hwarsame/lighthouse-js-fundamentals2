var lastIndexOf = function (array, num) {
  var answer = 0
  var wrong = false;
  let i = array.length - 1;
  while (i >= 0) {
    if (array[i] == num) {
      wrong = true;
      answer = i;
      break;
    }
    i--;
  }
  if (wrong) {
    return answer;
  }
  else {
    return -1;
  }



}


console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);