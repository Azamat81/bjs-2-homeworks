class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state *= 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }


  get state() {
    return this._state;
  }
}

let printItem1 = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
printItem1;
printItem1.name;
printItem1.releaseDate;
printItem1.pagesCount;
printItem1.state;
printItem1.type;

printItem1.state = 90;
printItem1.fix();
printItem1.state;

printItem1.state = 50;
printItem1.fix();
printItem1.state;

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

let printItem2 = new Magazine('Forbes', 2020, 180);
printItem2.type;

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

let printItem3 = new Book('А. Сапковский', 'Меч Предназначения', 1992, 384);
printItem3.author;
printItem3.name;
printItem3.releaseDate;
printItem3.pagesCount;
printItem3.type;

class NovelBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

let printItem4 = new NovelBook('А. Сапковский', 'Меч Предназначения', 1992, 384);
printItem4.author;
printItem4.type;

class FantasticBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

let printItem5 = new FantasticBook('Джон Толкин', 'Властелин колец', 1954, 2093);
printItem5.author;
printItem5.type;

class DetectiveBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

let printItem6 = new DetectiveBook('Агата Кристи', 'Десять негритят', 2019, 256);
printItem6.author;
printItem6.type;

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			return this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let result = this.books.find(book => book[type] === value);
		return result || null;
	}

	giveBookByName(bookName) {
		let givingBook = this.books.find(book => book.name === bookName);
		if (givingBook === undefined) {
			return givingBook = null
		} else {
			this.books = this.books.filter(book => book.name !== bookName);
			return givingBook;
		}
	}
}

let library = new Library('Библиотека имени Ленина');
let printItem7 = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
library;
library.name;
library.books;

library.addBook(printItem7);
library.books[0].name;
library.books.length;

library.books = [];
const printItemAdditional = new PrintEditionItem('Блокнот для заметок', 2021, 100); 
library.addBook(printItemAdditional);
library.addBook(printItem7);
const firstBook1 = library.findBookBy("releaseDate", 2019);
firstBook1.name;
const secondBook1 = library.findBookBy("releaseDate", 2154);
secondBook1;

library.books = [];
library.addBook(printItem7);
const firstBook2 = library.giveBookByName('Типовой школьный журнал');
firstBook2.name;
library.books.length;
const secondBook2 = library.giveBookByName('Судовой журнал');
secondBook2;