class Person {
    age = 25;

    get location() {
        return 'canada';
    }

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullname() {
        return this.firstName + " " + this.lastName;
    }
}


class Employee extends Person {
    constructor(firstName, lastName, role) {
        super(firstName, lastName);
        this.role = role;
    }

    get details() {
        return `${this.fullname()} works as a ${this.role} in ${this.location}`;
    }
}

// ✅ Export both classes
module.exports = { Person, Employee };
