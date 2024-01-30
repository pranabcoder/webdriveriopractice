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

/* 
Example - Print a number which is common multiple of 2 and 5, the value should be in range of 1 to 10
*/
for (let k = 1; k <= 10; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        console.log("From 1 to 10 common multiple between 2 and 5 is " + k); // From 1 to 10 common multiple between 2 and 5 is 10
    }
}
