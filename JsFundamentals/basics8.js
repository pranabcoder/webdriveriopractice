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

    getLocation(){
        return "Earth, Milky Way";
    }

    petInfo() {
        return `${this.petName}`;
    }
}

let pet = new Pet("John", "Doe", "Tom");
let petInfo = pet.petInfo();
let fullName = pet.fullName();
let location = pet.getLocation();
console.log(`${fullName} has a pet named ${petInfo} from location ${location}`); // John Doe has a pet named Tom from location Earth

