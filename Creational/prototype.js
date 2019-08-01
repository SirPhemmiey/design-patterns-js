/*
	Prototype pattern: This pattern is an object-based creational design pattern. In this, we use a sort of skeleton of an existing object to 
	create or instantiate new objects
*/


const car = {
	numberOfWheels: 4,
	start() {
		return 'started'
	},
	stop() {
		return 'stopped'
	}
};

const myCar = Object.create(car, { owner: { value: 'Femi'}});

console.log(myCar.__proto__ === car); //do not use the __proto__ in a real code. YOU ARE WARNED!!! :(

