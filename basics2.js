
let person ={
    firstName: 'Mayur',
    lastName: 'Baghla',
    age : 25,
    fullname : function (){
        console.log(this.firstName+ this.lastName)
    }

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

//enchanced for loop
for (let key in person){

    console.log(person[key])
}

console.log(person.fullname())