function MostFrequentNumber(numbers = []) {
    let maxCount = 0;
    let TheBig= 0;
  

    for(let i = 0; i < numbers.length; i++) {
          let count= 0;
          for(let j = 0; j < numbers.length; j++) {
              if(numbers[i] === numbers[j]) {
                  count++;
              }
          }
          if(count > maxCount) {
              maxCount = count;
              TheBig = numbers[i];
          }
    }


  return  document.write("the most frequent number is", TheBig, " and it appears ", maxCount, " times.");
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

MostFrequentNumber(numbers);