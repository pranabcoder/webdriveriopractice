// String Example 

let day = "Monday ";

/*
Example - Get String length
*/
console.log('Check the length of a string', day.length); // 7

/*
Example - Get Substring from a string
*/
console.log('Get a substring from a string', day.slice(0, 3)); // Mon

/*
Example - Get the character at a specific position
*/
console.log('Get the character from a string ', day[2]); // n

/* 
Example - Split the string into an array
*/
let splitDay = day.split('n');
console.log('Split the string into an array', splitDay); // [ 'Mon', 'day ' ]

/* 
Example - Print the splitted array elements
*/
console.log('Print the splitted array elements =>', splitDay[1]); // day

/*
Example - trim the spaces from the string
*/
console.log('Length of the string before trim', splitDay[1].length); // 4
console.log('Trim the spaces from the string', splitDay[1].trim()); // day
console.log('Length of the string after trim', splitDay[1].trim().length); // 3

/*
Example - Suppose we got two dates in string format from browser.
Get the difference between the two dates.
*/

let date = '23';
let nextDate = '25';

let differenceDates = parseInt(nextDate) - parseInt(date);
console.log('Difference between the two dates', differenceDates); // 2

/*
Example - Convert the integer to string
*/
let afterConversion = differenceDates.toString();
console.log('Convert the integer to string', differenceDates.toString()); // 2
console.log('Check the type of the converted string =>', typeof afterConversion); // string

/*
Example - Concatenate the two strings
*/
let newQuote = day + 'is fun day';
console.log('Concatenate the two strings', newQuote); // Monday is fun day

/*
Example - indexOf method to find the position of a character in a string
*/
console.log('Index of the character in a string', newQuote.indexOf('day')); // 3

/* 
Example - indexOf method to find the position of a character in a string from a specific position
*/
console.log('Index of the character in a string from a specific position', newQuote.indexOf('day', 4)); // 10

/*
Example - find the occurrence of a character in a string 
*/
console.log('Find the occurrence of a character in a string', newQuote.match(/day/g).length); // [ 'day', 'day' ]

/* 
Another way to find the occurrence of a character in a string 
*/

let count = 0;
let value = newQuote.indexOf('day');
while (value !== -1) {
    count++;
    value = newQuote.indexOf('day', value + 1);
}

console.log('Find the occurrence of a character in a string', count); // 2