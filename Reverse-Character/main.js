function ReverseCharacter(Character) {
  const CharacterSplit = Character.split('');
  let reversed = [];
  for (let i = CharacterSplit.length; i >= 0; i--) {
    reversed.push(CharacterSplit[i]);
  }
  return document.write("the reversed word is : ", reversed.join(''));
}

let userInput = prompt("Enter a word you want to reverse:");
let Character = userInput;
ReverseCharacter(Character);

