var words = "I am a Great Human";

function rwx(words) {
  words = words.split(/\s/).map((word) => {
    let i = 0;
    let result = "";
    let length = word.length;
    while (length--) {
      result += word[i] == word[i].toUpperCase() ? word[length].toUpperCase() : word[length].toLowerCase();
      ++i;
    }
    return result;
  });
  return words.join(" ");
}
console.log(rwx(words));
