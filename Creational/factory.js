
/*
	Factory pattern: In this pattern, we provide a generic interface that delegates the responsibility of object instantiation to its subclasses.
	This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similar characteristics.
*/

class BallFactory {

	constructor() {
		this.createBall = function(type) {
			let ball;
			if (type === "football" || type === "soccer")
				ball = new Football();
			if (type === "basketball")
				ball = new Basketball();
			ball.roll = function() {
				return `The ${this.type} is rolling`;
			}

			return ball;
		}
	}
}


class Basketball {

	constructor() {
		this.type = 'basketball';
		this.bounce = function() {
			return 'You bounced the basketball';
		}
	}
}

class Football {

	constructor() {
		this.type = 'football';
		this.kick = function() {
			return 'You kicked the ball';
		}
	}
}


//creating objects
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.kick());
console.log(myBasketball.bounce());