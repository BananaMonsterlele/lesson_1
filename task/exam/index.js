let numbers = [];


function isInteger(num) {
  return (num ^ 0) === num;
}
// module.exports = {
//     firstName: 'Name',
//     secondName: 'Surname',
//     task: getFriendlyNumbers
// }


function isFriendly (num1, num2) {
	let sum1 = getDivisorsSum(num1);
	let sum2 = getDivisorsSum(num2);

	return sum1 == num2 && sum2 == num1;
}
// alert(isFriendly(220,284));

function getDivisorsSum (num) {
	return getSum(getDivisors(num));
}		

function getDivisors (num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}

	return arr;
}

function getSum (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function getFriendlyNumbers(start, end) {
	for (let i = start; i <= end; ++i) {
		if(start < end && typeof(start) == 'number' && typeof(end) == 'number' && start > 0 && end > 0 && isInteger(start) == true && isInteger(end) == true) {
			for (let y = i + 1; y <= end; y++){
				if (isFriendly(i,y) == true) {
					console.log(true);
				} else {
					console.log('В следующий раз');
				}
			}
		} else {
			return false;
		}
	}	

}
console.log(getFriendlyNumbers(1,300));