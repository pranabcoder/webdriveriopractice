import Guest from './basics7.js';

let guest = new Guest("John", "Doe");
console.log('Full name of the guest is', guest.fullName()); // Full name of the guest is John Doe

/*
Example Inheritance
*/

class Pet extends Guest {
    constructor(firstName, lastName, petName) {
        super(firstName, lastName);
        this.petName = petName;
    }

    petInfo() {
        return `Pet name is ${this.petName}`;
    }
}