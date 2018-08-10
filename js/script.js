let monthBudget,
    shopName,
    time,
    price = 8000;   

function start () {
    monthBudget = prompt("Ваш бюджет на месяц", "50000");

    while(isNaN(monthBudget) ||  monthBudget == '' || monthBudget == null) {
        monthBudget = prompt("Ваш бюджет на месяц", "50000");
   }

    shopName = prompt("Название вашего магазина", "FunnyShop").toUpperCase();    
    time = 19; 
}

// start();

let mainList = {
    monthBudget: monthBudget,
    shopName: shopName,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
};

function chooseGoods() {
    for (let i = 0; i < 5; i++) {

        let a = prompt("Какой тип товаров будем продавать?");
        
        if ((typeof(a)) === 'string' && typeof(a) != null && a != '' && a.length < 50) {
            console.log('All is okey');
            mainList.shopGoods[i] = a;
        }  else {
            i--;
        }
    }
}

// chooseGoods();

// let i = 0;
// while (i < 5) {
//     let a = prompt("Какой тип товаров будем продавать?");
//     if ((typeof(a)) === 'string'  &&  (typeof(a)) === null && a != '' && a.length < 50) {
//         console.log('All is okey');
//         mainList.shopGoods[i] = a;
//     }
//     i++;
// };

// do {
//     let a = prompt("Какой тип товаров будем продавать?");
//     if ((typeof(a)) === 'string'  &&  (typeof(a)) === null && a != '' && a.length < 50) {
//         console.log('All is okey');
//         mainList.shopGoods[i] = a;
//     }
//     i++;
// } while(i < 5);
function workTime(time) {
    if (time < 0) {
        console.log('Impossible');
    } else if (time > 8 && time < 20) {
        console.log('Time to work');
        } else if (time < 24) {
            console.log('Its too late');
            // } else {
                console.log('There are only 24 hours in a day!');
            }
}        
// workTime(18);


function discountSystem (discount) {
    if (discount == true) {
        price = price * 0.8;
        console.log(price);
    } else {
        console.log(price);
    }
}

// discountSystem(true);

console.log(mainList);

function dayBudget () {
    alert("Дневной бюджет составляет " + monthBudget/30);
}

// dayBudget();


function employers () {
        for (let i = 0; i < 4; i++) {
            let empName =  prompt('Введите имя сотрудника');
            mainList.employers[i + 1] = empName;
        }
    console.log(mainList);
}
employers();
