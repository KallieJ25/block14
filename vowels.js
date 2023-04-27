// write a function that takes a string as input
// create a loop that iterates over the input string
// create a variable with a value of array of vowels
// create a count variable for vowels 
// create a count variable for consanants 
// check if each character is a vowel or consanant 
// increase count of vowle by 1 if vowel
// increase count of consanants by 1 if consanant
// return string and number of vowels and consanant
// print return value

const number = (str) => {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let consanantCount = 0
  for(let i = 0; i < str.length; i++) {
    if(vowelsArr.includes(str[i])) {
        vowelCount++;
     } else {
        consanantCount++;
    }
    } return `${str} has ${consanantCount} consanants and ${vowelCount} vowels`;
  }; 

  const returnString = number('textbook');
  console.log(returnString);