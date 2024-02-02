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
Example - Print the splited array elements
*/
console.log('Print the splited array elements =>', splitDay[1]); // day

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