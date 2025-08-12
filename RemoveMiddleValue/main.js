function RemoveMiddleValue(numbers = []) {
  let RemoveIndex = numbers.length / 2;
  if (RemoveIndex % 2 != 0) {
    numbers.splice(RemoveIndex, 1);
  }
  else {
    numbers.splice(RemoveIndex - 1, 1);
  }


  return document.write(numbers);
}

const numbers = [];
let x = true;

while (x) {

  let userInput = prompt("Enter a number: and enter 'done' to finish");
  let number = parseInt(userInput);

  if (isNaN(number)) {
    x = false;
    console.log("Input is not a number, exiting loop.");
  } else {
    numbers.push(number);
  }
}

RemoveMiddleValue(numbers);