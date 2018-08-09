/*week = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
let date = new Date();

function getWeekDay(date){
            switch (date.getDay()){
                case 0: return 'Sunday'
                break;
                case 1: return 'Monday'
                break;
                case 2: return 'Tuesday'
                break;
                case 3: return 'Wednesday'
                break;
                case 4: return 'Thursday'
                break;
                case 5: return 'Friday'
                    break;
                case 6: return 'Saturday'
                    break;
                default: return '0'
                	break;
            };
        };

for (let i = 0; i < week.length; i++) {
    if (i == 5 || i == 6) {
    	document.write('<strong>' + week[i] + '</strong>' + '<br>' + '<br>');
    } else if (i == date.getDay() - 1) {
    	document.write('<em>' + getWeekDay(date) + '</em>');
    	}
		else {
			document.write('<p>' + week[i] + '</p>');
		}

}


































*/

arr = [ '222', '3353453', '345235', '325352', '74354', '6432', '6532'];

for (let i = 0; i < 7; i++) {
	if (arr[i][0] == 3 || arr[i][0] == 7) {
		console.log(arr[i]);
	};
};



