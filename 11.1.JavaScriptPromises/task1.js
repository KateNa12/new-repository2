// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент.
//  Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function someText(text, delay) {
	setTimeout(function () {
		console.log(text);
	}, delay);
}

someText('Hello, my name is Kate', 3000);
