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

let person = new Person("Mayur", "Baghla");
console.log(person.fullname()); // ✅ Mayur Baghla
