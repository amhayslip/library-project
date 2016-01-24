// Write code here to make the code below work. Do not change the code below.

var library = new Library();

library.books.push(
	new Book('Huck Finn'),
	new Book('Hardy Boys'),
	new Book('Hunger Games'),
	new Book('Twilight'),
	new Book('Coding for Dummies')
)g

var aaron = new Person('Aaron');
var avi = new Person('Avi');
var narkis = new Person('Narkis');

library.checkOutBook(aaron, 'Huck Finn');
library.checkOutBook(aaron, 'Twilight');
library.checkOutBook(avi, 'Huck Finn');
library.returnBook(aaron, 'Huck Finn');
library.checkOutBook(avi, 'Huck Finn');
library.checkOutBook(narkis, 'Twilight');
library.checkOutBook(narkis, 'Coding for Dummies');
library.returnBook(narkis, 'Coding for Dummies');
