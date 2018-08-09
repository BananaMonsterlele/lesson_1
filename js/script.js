let monthBudget = +prompt("Ваш бюджет на месяц", "50000");
let shopName = prompt("Название вашего магазина", "FunnyShop");
let time = 19;

let mainList = {
    monthBudget,
    shopName,
    shopGoods: [],
    employers: {},
    open
}

for (let i = 0; i < 5; i++) {
    let a = prompt("Какой тип товаров будем продавать?");
    if (((typeof(a)) === 'string'  ||  (typeof(a)) === null) && a != '' && a.length < 50) {
        console.log('All is okey');
        mainList.shopGoods[i] = a;
    } else {
        console.log('Пожалуйста, введи данные в строчно-буквенном формате');
    }
};

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

if (time < 0) {
    console.log('Impossible');
} else if (time > 8 && time < 20) {
    console.log('Time to work');
    } else if (time < 24) {
        console.log('Its too late');
        } else {
            console.log('There are only 24 hours in a day!');
        };

console.log(mainList);

alert("Дневной бюджет составляет " + monthBudget/30);