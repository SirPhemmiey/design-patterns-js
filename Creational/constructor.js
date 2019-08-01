
/*
	Constructor pattern: A contructor is a special function that can be used to instantiate a new object with methods and properties defined 
	by that function
*/


class Hero {
	constructor(name, speciality) {
		this.name = name;
		this.speciality = speciality;

		this.getDetails = function() {
		return `${this.name} is good at ${speciality}`;
	}
	}
}

const Person = new Hero('Femi', 'tech stuff');
console.log(Person.getDetails());