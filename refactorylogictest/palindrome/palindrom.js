let word1 = "Radar";
let word2 = "Malam";
let word3 = "Kasur ini rusak";
let word4 = "Ibu Ratna antar ubi";
let word5 = "Malas";
let word6 = "Makan nasi goreng";
let word7 = "Balonku ada lima";

function palindrome(input) {
  let strArray = input.toLowerCase().split("");
  let newArr = strArray.join("");
  let reverseArr = [...newArr].reverse().join("");

  if (newArr === reverseArr) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(palindrome(word1));
console.log(palindrome(word2));
console.log(palindrome(word3));
console.log(palindrome(word4));
console.log(palindrome(word5));
console.log(palindrome(word6));
console.log(palindrome(word7));
