//JavaScript Practice
for (let number = 1; number <= 99; number++) {
  /*厳密等価演算子 (===) は、二つのオペランドが等しいことを検査し、論理値で結果を返す
  等価演算子とは異なり、厳密等価演算子はオペランドの型が異なる場合、常に異なるものと判断する*/
  if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Fizz " + number);
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Buzz " + number);
  } else if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz " + number);
  }
}
