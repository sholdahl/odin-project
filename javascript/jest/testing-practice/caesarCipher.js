const cipher = (string, num) => {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let message = "";
  for (let i = 0; i < string.length; i++) {
    const isUpperCase = string[i] === string[i].toUpperCase();
    
    const letterIndex = alphabet.findIndex((element) => element === string[i].toLowerCase());
    const newLetterIndex = letterIndex + num;
    let character = "";

    if (!(/^[a-zA-Z]+$/.test(string[i]))) {
      character = string[i];
      message += character;
      continue;
    } else if (newLetterIndex > 25) {
      newLetterIndex = newLetterIndex - 26;
      character = alphabet[newLetterIndex];
    } else if (newLetterIndex < 0) {
      newLetterIndex = newLetterIndex + 26;
      character = alphabet[newLetterIndex];
    } else {
      character = alphabet[newLetterIndex];
    }

    if (isUpperCase) {
      character = character.toUpperCase();
    }
    message += character;
  }
  return message;
};

export default cipher;
