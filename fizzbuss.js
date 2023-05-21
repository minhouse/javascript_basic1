for (let number = 1; number <= 99; number++) {
  if (number % 3 === 0 && number % 5 != 0) {
    console.log("Fizz " + number);
  } else if (number % 5 === 0 && number % 3 != 0) {
    console.log("Buzz " + number);
  } else if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz " + number);
  }
}
