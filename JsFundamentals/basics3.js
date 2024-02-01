// Array Example - 

/*
Example - One way to create an array

var marks = new Array(6);
var marks = new Array(20, 40, 35, 12, 37, 100);
*/

/* 
Example - Another way to create an array
*/
let marks = [20, 40, 35, 12, 37, 100];

/*
Example - Accessing an array element with index number
 */
console.log(marks[0]); // 20

/* 
Example - Change the value of an array element with index number
*/
marks[3] = 14;
console.log(marks); // [ 20, 40, 35, 14, 37, 100 ]

/*
Example - Accessing the length of an array
*/
console.log(marks.length); // 6

/* 
Example - Add new element to an array
*/
marks.push(200);
console.log(marks); // [ 20, 40, 35, 14, 37, 100, 200 ]

/*
Example - Remove the last element of an array
*/
marks.pop();
console.log(marks); // [ 20, 40, 35, 14, 37, 100 ]

/* 
Example - Add new element to the beginning of an array
*/
marks.unshift(12);
console.log(marks); // [ 12, 20, 40, 35, 14, 37, 100 ]

/*
Example - Show the index number of an array element
*/
console.log(marks.indexOf(35)); // 3

/*
Example - Check an element is present in an array or not
*/
console.log('ELement present in the array or not', marks.includes(35)); // true

/*
Example - to create a new array from a section of an existing array
*/
let newMarks = marks.slice(2, 5);
console.log('to create a new array from a section of an existing array', newMarks); // [ 40, 35, 14 ]

/*
Example - Print all the elements of an array
*/
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

/*
Example - To Sum up all the elements of an array
*/
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log('Sum of all the elements of an array', sum); // 258

/*
Example - reduce method in array
*/