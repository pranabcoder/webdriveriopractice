/*
Example - Conditional Statements
 */

const flag = true;
if (flag) {
    console.log("Flag is true");
} else if (!flag) {
    console.log("Flag is false");
} else {
    console.log("Flag is not a boolean");
}

if (!flag) {
    console.log("Condition Satisfied");
} else {
    console.log(flag);
    console.log("Condition Not Satisfied");
}

/*
Example - While Loop
while (true) {
    console.log("I am in while loop");
}
*/
let i = 0;
let output = "";
while (i < 10) {
    output += i + "\t";
    i++;
}
console.log(output); // 0 1 2 3 4 5 6 7 8 9

/*
Example - Do While Loop

do {
    i++;
} while (i > 10);

console.log(i); // 11
*/

/*
Example - For Loop
*/
let result = "";
for (let k = 0; k < 10; k++) {
    result += k + "\t";
}
console.log(result); // 0 1 2 3 4 5 6 7 8 9

/* 
Example of While loop , where it is run based on the statement also
*/

let required = true;
while (required) {
    console.log(required); // true
    required = false;
}