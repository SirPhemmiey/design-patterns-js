/* 
	Decorator pattern: This pattern refers to the ability to add behaviour or functionalities to existing classes dynamically
*/

class Book {
	constructor(title, author, price) {
		this._title = title;
		this._author = author;
		this._price = price;
	}

	getDetails() {
		return `${this._title} by ${this._author}`;
	}

}

	//decorator 1
	function giftWrap(book) {
		book.isGiftWrapped = true;
		book.unwrap = function() {
			return `Unwraped ${book.getDetails()}`;
		}

		return book;
	}

	//decorator 2
	function hardbindBook(book) {
		book.isHardbound = true;
		book.price += 5;
		return book;
	}

	//usage
	const book = new Book('The Alchemist', 'Paulo Coelho', 10);
	const alchemist = giftWrap(book);

	console.log(alchemist.isGiftWrapped);
	console.log(alchemist.unwrap());

	const book2 = new Book('Inferno', 'Dan Brown', 15);
	const inferno = hardbindBook(book2);

	console.log(inferno.isHardbound);
	console.log(inferno.price);

