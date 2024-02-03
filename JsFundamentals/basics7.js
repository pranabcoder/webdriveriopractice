class Person {
    age = 50;
}

/*
Access the value of the property of the class
*/

let person = new Person();
console.log('Age of the person is ', person.age); // 50

/*
Example - get and set methods
*/

class NewPerson {
    age = 50;

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }
}

let newPerson = new NewPerson();
console.log('Age of the person is ', newPerson.getAge()); // Age of the person is  50

/*
Example - constructor example
*/

export default class Guest {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}


/*
let guest = new Guest('John', 'Doe');
console.log('Full name of the guest is ', guest.fullName()); // Full name of the guest is  John Doe
*/
