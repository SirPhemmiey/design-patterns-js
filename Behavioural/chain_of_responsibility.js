/*
	Chain of Responsibility: This pattern provides a chain of loosely coupled objects. Each of these objects can choose to act on 
	or handle the request the client
*/

	
	class CumulativeSum {

		constructor(initValue = 0) {
			this.sum = initValue;
		}

		add(value) {
			this.sum += value;
			return this;
		}
	}

	const sum1 = new CumulativeSum;
	console.log(sum1.add(10).add(20).sum);

	const sum2 = new CumulativeSum(10);
	console.log(sum2.add(30).add(10).sum);