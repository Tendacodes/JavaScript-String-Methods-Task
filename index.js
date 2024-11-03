// String Method Tasks

//// 1. Capitalize the first letter of a given string.
// Example: "hello" → "Hello"

// let text = "hello";

// let text2 = text[0].toUpperCase() + text.slice(1);

// console.log(text2);


//// 2. Check if a string contains a specific substring.
// Example: "Hello World", substring "World" → true

// let text = "Hello World";

// function Check(str, input){
//     if(input == "World"){

//         return true;
//     }

//     else
//     {
//         return false;
//     }

// }


// console.log(Check(text, "World"))

//// 3. Repeat a given string 'n' times.
// Example: "abc", 3 → "abcabcabc"



// let text = "abc"

// text2 = text.repeat(3);

// console.log(text2);

//// 4. Replace all occurrences of a specific word in a string with another word.
// Example: "I love apples", replace "apples" with "oranges" → "I love oranges"


// let text = "I love apples";

// let text2 = text.replaceAll("apples", "oranges");

// console.log(text2);

//// 5. Count the number of words in a sentence.
// Example: "Hello World!" → 2

// let text = "Hello World!";

// let text2 = text.split(" ").length

// console.log(text2);




//// 6. Reverse the characters in a given string.
// Example: "hello" → "olleh"


// let text = "hello";

// let text2 = text.split("").reverse().join("");

// console.log(text2);




//// 7. Extract the text between two characters.
// Example: "Hello [World]", characters "[" and "]" → "World"

// let text = "Hello [World]"

// function extractChars(str, start, end) {
//     const startIndex = str.indexOf(start);
//     const endIndex = str.indexOf(end, startIndex + 1);
  
//     if (startIndex !== -1 && endIndex !== -1) {
//       return str.slice(startIndex + 1, endIndex);
//     }
//     else {
//         return null;
//     }
// }

//// 8. Convert a string to snake_case format.
// Example: "Hello World" → "hello_world"


// let text = "Hello World";

// let text2 = text.toLowerCase();

// text2= text2.replaceAll(" " , "_")

// console.log(text2);

//// 9. Remove leading, trailing, and extra spaces in a string.
// Example: "   Hello    World   " → "Hello World"


// let text =  "   Hello    World   " ;

// let text2 = text.trim().replace(/\s+/g, ' ');

// console.log(text2);


//// 10. Identify the longest word in a given sentence.
// Example: "I love programming" → "programming"

// let sentence = "I love programming";

// function findLongestWord(sentence) {
//     const words = sentence.split(' '); 
//     let longestWord = '';

//     words.forEach(word => {
//         if (word.length > longestWord.length) {
//             longestWord = word; 
//         }
//     });

//     return longestWord;
// }

// console.log(findLongestWord(sentence));

// Number Method Tasks

//// 1. Convert a string to a number and handle invalid cases.
// Example: "123" → 123, "abc" → NaN

// let text = "123";
// let text_2 = "abc"

// function convertToNumber(str) {
//     const num = Number(str);
//     return num;
// }

// console.log(convertToNumber(text));
// console.log(convertToNumber(text_2));





//// 2. Round a decimal number to two decimal places.
// Example: 3.14159 → 3.14

// let x = 3.14159;

// let x2 = x.toFixed(2);

// console.log(x2);



//// 3. Write a function that returns the square root of a given number.
// Example: 5 → 25


// let x = 5;

// const number = x * x;

// console.log(number);



//// 4. Write a function that converts a string to a floating-point number.
// Example: "2.454" → 2.454


// let text  = "2.454";

// const num = parseFloat(text);

// console.log(num);





//// 5. Parse a string to an integer
// Example: "55" → 55


// let text = "55";

// const num = parseInt(text);

// console.log(num)

//// 6. Write a function that checks if a given value is NaN (Not-a-Number)
// Example: "ereferf" → true, "23" → false

// let text = "ereferf";

// function Check(str)
// {
//     if(str == Number){

//         return false;
//     }

//     else{
//         return true;
//     }

// }

//console.log(Check(text));


//// 7. Calculate the sum of the digits of a given number.
// Example: 123 → 6

// function sumOfDigits(num) {
//     const digits = num.toString().split('');
//     let sum = 0;
  
//     for (let i = 0; i < digits.length; i++) {
//       sum += Number(digits[i]);
//     }
//     return sum;
// }



//// 8. Find the number of digits in a given number.
// Example: 1234 → 4

// let num  = 1234

// let num2 = num.toString().length;
  
// console.log(num2);





//// 9. Find the sum of array items
// Example: [1, 3, "5"] → 9


// let arr = [1, 3, "5"];

// let sum = 0;

// for(let i = 0; i < arr.length; i++){

//     sum+= Number(arr[i])
// }

// console.log(sum);


//// 10. Write a function that rounds a given decimal number to the nearest integer.
// Example: 3.12 → 3

// let x = 3.12;



// let x2 = x.toPrecision(1);

// console.log(x2);


