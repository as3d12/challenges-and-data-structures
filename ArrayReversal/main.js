function reversenum(numbers = []) {
  return document.write("You entered the following numbers:", numbers.reverse());
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

reversenum(numbers);

