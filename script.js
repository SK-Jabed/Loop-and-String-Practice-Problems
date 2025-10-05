// Problem: 01
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Problem: 02
let n = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
  console.log(i);
}

// Problem: 03
let num = parseInt(prompt("Enter a number: "));
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log("Sum is:", sum);

// Problem: 04
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Problem: 05
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Problem: 06
let number = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${number} × ${i} = ${number * i}`);
}

// Problem: 07
let factorialNumber = parseInt(prompt("Enter a number: "));
let factorial = 1;

for (let i = 1; i <= factorialNumber; i++) {
  factorial *= i;
}

console.log("Factorial:", factorial);

// Problem: 08
let revNum = parseInt(prompt("Enter a number: "));

for (let i = revNum; i >= 1; i--) {
  console.log(i);
}

// Problem: 09
let evenOfSumNum = parseInt(prompt("Enter a number:"));
let evenSum = 0;

for (let i = 1; i <= evenOfSumNum; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}

console.log("Sum of even numbers:", evenSum);

// Problem: 10
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Problem: 11
let str = "My Name is Sheikh Jabed";
let length = 0;

for (let char of str) {
  length++;
}

console.log("Length is:", length);

// Problem: 12
let text = "JavaScript Programming";
let vowelsCount = 0;
let consonantsCount = 0;

for (let char of text.toLowerCase()) {
  if ('aeiou'.includes(char)) {
    vowelsCount++;
  } else if (char >= 'a' && char <= 'z') {
    consonantsCount++;
  }
}

console.log("Vowels:", vowels, "Consonants:", consonants);

// Problem: 13
let originalStr = "hello";
let reversedStr = "";

for (let i = originalStr.length - 1; i >= 0; i--) {
  reversedStr += originalStr[i];
}

console.log("Reversed:", reversedStr);

// Problem: 14
let palindromeStr = "madam";
let reversed = "";

for (let i = palindromeStr.length - 1; i >= 0; i--) {
    reversed += palindromeStr[i];
}
if (palindromeStr === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// Problem: 15
let sentence = "I love programming";
let spaceCount = 0;

for (let char of sentence) {
  if (char === ' ') {
    spaceCount++;
  }
}

console.log("Spaces:", spaceCount);

// Problem: 16
let fruit = "banana";
let charCount = {};

for (let char of fruit) {
  charCount[char] = (charCount[char] || 0) + 1;
}

console.log("Character frequency:", charCount);

// Problem: 17
let nameStr = "Naeeim";

for (let char of nameStr) {
  console.log(char);
}

// Problem: 18
let withVowels = "Programming";
let withoutVowels = "";

for (let char of withVowels) {
  if (!'aeiouAEIOU'.includes(char)) {
    withoutVowels += char;
  }
}

console.log("Without vowels:", withoutVowels);

// Problem: 19
let sentence2 = "I am learning JavaScript";
let wordCount = 0;
let inWord = false;

for (let char of sentence2) {
  if (char !== ' ' && !inWord) {
    wordCount++;

    inWord = true;
  } else if (char === ' ') {
    inWord = false;
  }
}

console.log("Word count:", wordCount);

// Problem: 20
let text2 = "hello world";
let words = text2.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let result = words.join(" ");
console.log(result);

