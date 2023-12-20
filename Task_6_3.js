function funcArrEvenOddNullOther() {
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];
var countEven = 0;
var countOdd = 0;
var countOther = 0;
var countNull = 0;

for (var i = 0; i < arr.length; i++){
  
  if (arr[i] === null) {
     countNull++;
  } else {
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}
}

console.log("Чётных " + countEven);
console.log("Не чётных " + countOdd);
console.log("Другие " + countOther);
console.log("Null " + countNull);
}

funcArrEvenOddNullOther();