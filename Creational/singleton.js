
/*
	Singleton Pattern: It's a pattern in which only one instance of a class can exist. 
	It works like this; If no instance of the singleton class exist, then it creates and returns a new instance,
	but if an instance exist, it makes reference to the existing one and returns it.

	A perfect real-life example is that of mongoose. It uses a singleton pattern
*/

class Database {

	constructor(data) {
		if (Database.exists) {
			return Database.instance;
		}

		this._data = data;
		Database.exists = true;
		Database.instance = this;
		return this;
	}

	getData() {
		return this._data;
	}

	setData() {
		this._data = data;
	}
}

//usage
const mongo = new Database('mongo');
console.log(mongo.getData()) //this will log mongo

const mysql = new Database('mysql');
console.log(mysql.getData()) //this will still log mongo