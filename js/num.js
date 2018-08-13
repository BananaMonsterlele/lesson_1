let num = 33721;
let multiply = (''+ num).split('');
let secondMultiply= multiply[0] * multiply[1] * multiply[2] * multiply[3] * multiply[4];

console.log(secondMultiply);

let grade = secondMultiply ** 3;
let lastStage = (''+ grade).split('');

alert(lastStage[0] + lastStage[1]);

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

