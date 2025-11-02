
let person ={
    firstName: 'Mayur',
    lastName: 'Baghla'
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person['firstName'])
console.log(person)
person.firstName= "Rohit"
person.gender= 'Male'

console.log(person)

delete person.gender
console.log(person)


//to check if the property exist in an object or not
console.log('gender' in person)
