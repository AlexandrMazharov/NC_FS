let word = prompt("Word", ["abba"]);

function checkPalindrom(str) {
  return str == str.split("").reverse().join("");
}
function customCheckPalindrom(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i]) {
      return false;
    }
  }
}

console.log(customCheckPalindrom(word));
checkPalindrom(word)
  ? alert(`${word} is polindrome`)
  : alert(`${word} is not polindrome`);
