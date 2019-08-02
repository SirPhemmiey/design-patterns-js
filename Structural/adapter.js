/*
	Adapter pattern: It's a patter where the interface of one class is translated to another.
	This pattern lets classes work together that could not otherwise because of incompatible interfaces. 
*/


//old interface
class OldCalculator {

	constructor() {
		this.operations = function(a, b, operation) {
			switch(operation) {
				case 'add':
					return a + b;
				case 'sub':
					return a - b;
				default: 
					return NaN;
			}
		}
	}
}

//new interface
class NewCalculator {

	constructor() {
		this.add = function(a, b) {
			return a + b;
		}
		this.sub = function(a, b) {
			return a - b;
		}
	}
}

//adapter class
class CalcAdapter {

	constructor() {
		const newCalc = new NewCalculator();
		this.operations = function(a, b, operation) {
			switch(operation) {
				case 'add':
					return newCalc.add(a, b);
				case 'sub':
					return newCalc.sub(a, b);
				default: 
					NaN;
			}
		}
	}
}

//usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add'));

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5));

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 5, 'add'));