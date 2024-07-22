// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkedOutCount, discardedStatus) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pageCount = pageCount;
        this.checkedOutCount = checkedOutCount;
        this.discardedStatus = discardedStatus;
    }
    checkout(uses = 1) {
        this.checkedOutCount += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkedOutCount, discardedStatus) {
        super(title, author, copyrightDate, isbn, pageCount, checkedOutCount, discardedStatus);
    }

    dispose(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.discardedStatus = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkedOutCount, discardedStatus) {
        super(title, author, copyrightDate, isbn, pageCount, checkedOutCount, discardedStatus);
    }

    dispose() {
        if (this.checkedOutCount > 100) {
            this.discardedStatus = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let newNovel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let newManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 	'0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:

newNovel.checkout(5);
newManual.dispose(2024);

console.log(newNovel.checkedOutCount);
console.log(newManual.discardedStatus);