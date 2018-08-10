let str = 'урок-3-был слишком легким';

console.log(str[0].toUpperCase() + str.slice(1)); //Первое задание

console.log(str.replace(/-/g, ' ')); //Второе задание




let arr = [20, 33, 1, 'Человек', 2, 3];
console.log(Math.sqrt((arr[0]**3) + (arr[1]**3) + (arr[2]**3) + (arr[3]**3) + (arr[4]**3) + (arr[5]**3))); //Четвертое задание


function transform(arg) {
	let string = arg;
	if(typeof(string) === 'string') {
		if (string[0] == ' '){
			string[0].replace(/ /g,'popa');
			console.log('Пробел в начале');
		}
		if (string[string.length - 1] == ' ');
			string[string.length - 1].replace(/ /g,'asshole');
			console.log('Пробел в конце');
		if (string.length > 50) {
			let sliced = string.slice(0, 50);
			if (sliced.length < string.length) {
			sliced += '...';
			console.log('Больше 50 символов');
			}	
		}
		console.log('Good Jobs');
	} else {
		alert('Переменная имеет не строковое значение');
	}
	console.log(string);
}
transform('Hello');


