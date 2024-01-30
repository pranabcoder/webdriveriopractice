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