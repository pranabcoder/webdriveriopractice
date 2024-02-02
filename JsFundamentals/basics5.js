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