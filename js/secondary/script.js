week = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

// console.log(week[0], 
//     week[1], 
//     week[2], 
//     week[3]);

// document.write(week[0] + '<br>' + week[1]);
// var o = document.createElement('div')
// o.innerHTML = week;
// document.getElementById('test').appendChild(o)    

// for (let i = 0; i < 7; i++) {
//     alert(week[i]);
// }
let x = 1
for (let i = 0; i < week.length; i++) {
    if (i == 5 || i == 6) {
    	document.write('<strong>' + week[i] + '</strong>' + '<br>' + '<br>');
    } else if (x < 2) {
    	let dayOfWeek = +prompt('Какой сегодня день недели по счету?', 1) - 1;
    	document.write('<em>' + week[dayOfWeek] + '</em>');
    	x++
    	}
		else {
			document.write('<p>' + week[i] + '</p>');
		}

}




// arr = [];
// for (let i; i < 7; i++) {
// 	arr[i] = Math.random();
// 	console.log(arr[i]);
// }





// switch (arr.number) {
// 	case '7*':
// 		console.log('me');
// 		break;
// 	case '3*':
// 		console.log('me');
// 		break;	
// 	default:
// 		console.log('sosat')
// 		break;
// }