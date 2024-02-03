// Object Example 1

let person = {
    firstName: "John",
    lastName: "Doe",
};

/*
Example - Access values of the object
*/
console.log('Person first name is ', person.firstName); // John

/*
Example - Another way to access values of the object
*/
console.log("Persons last name is ", person["lastName"]); // Doe

/*
Example - Update property value at run time
*/
person.firstName = "Jane";
console.log('Person first name is after updating at run time', person.firstName); // Jane

/*
Example - Add new property to the object at run time
*/
person.gender = "Male";
console.log('Updated person object', person); // { firstName: 'Jane', lastName: 'Doe', gender: 'Male' }

/*
Example - Delete property from the object at run time
*/
delete person.gender;
console.log('Updated person object after delete', person); // { firstName: 'Jane', lastName: 'Doe' }

/*
Example - Check a property exists in the object
*/
console.log('Does person object have gender property?', "gender" in person); // false

/*
Example - Do the iteration of the object through keys and prints the values
*/
for (let key in person) {
    console.log('Key is ', key, ' and value is ', person[key]);
} // Key is  firstName  and value is  Jane, Key is  lastName  and value is  Doe