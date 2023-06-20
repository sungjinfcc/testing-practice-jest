function checkUpper(charcode, shift) {
  let nextCharcode = charcode + shift;
  while (nextCharcode > 90) {
    nextCharcode -= 26;
  }
  return String.fromCharCode(nextCharcode);
}

function checkLower(charcode, shift) {
  let nextCharcode = charcode + shift;
  while (nextCharcode > 122) {
    nextCharcode -= 26;
  }
  return String.fromCharCode(nextCharcode);
}

export default function caesarCipher(string, shift) {
  let newString = "";
  for (let i = 0; i < string.length; i += 1) {
    const currentCharCode = string.charCodeAt(i);
    if (
      currentCharCode < 65 ||
      (currentCharCode > 90 && currentCharCode < 97) ||
      currentCharCode > 122
    ) {
      newString += String.fromCharCode(currentCharCode);
    } else if (currentCharCode <= 90) {
      newString += checkUpper(currentCharCode, shift);
    } else {
      newString += checkLower(currentCharCode, shift);
    }
  }
  return newString;
}
