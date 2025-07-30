function MinValue(numbers = []) {
  let min=numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return document.write("Minimum value is:", min);
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

MinValue(numbers);

