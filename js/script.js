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
    discount: false,
    shopItems: [],
    chooseGoods: function chooseGoods() {
            for (let i = 0; i < 4; i++) {

                let a = prompt("Какой тип товаров будем продавать?",'');
                
                if ((typeof(a)) === 'string' && typeof(a) != null && a != '' && a.length < 50) {
                    console.log('All is okey');
                    mainList.shopGoods[i + 1] = a;
                }  else {
                    i--;
                }
            }
        },
    workTime: function workTime(time) {
            if (time < 0) {
                console.log('Impossible');
            } else if (time > 8 && time < 20) {
                console.log('Time to work');
                mainList.open = true;
                } else if (time < 24) {
                    console.log('Its too late');
                    // } else {
                        console.log('There are only 24 hours in a day!');
                    }
        },
    discountSystem: function discountSystem () {
            if (mainList.discount == true) {
                price = price * 0.8;
            }    
        },
    dayBudget: function dayBudget () {
            alert("Дневной бюджет составляет " + monthBudget/30);
        },        
    employers: function employers () {
                for (let i = 1; i < 5; i++) {
                    let empName =  prompt('Введите имя сотрудника','');
                    mainList.employers[i] = i + ' - ' +empName;
                }
            console.log(mainList);
        },
    chooseShopItems: function chooseShopItems() {
        for (let i = 0; i < 1; i++){
            let items = prompt('Перечислите через запятую без пробелов ваши товары','');
            if (typeof(items) === 'string' && typeof(items) != null && items != '') {
                mainList.shopItems = items.split(',');
                mainList.shopItems.push(prompt("Погодите, возможно еще?", ""));
                mainList.shopItems.sort();
                mainList.shopItems.forEach(function(item, i) {
                    alert("У нас вы можете приобрести: " + (i + 1) + ' ' + item);
                });
                for (let key in mainList.shopItems) {
                    console.log('Наш магазин включает в себя: ' + (key + 1) + ' ' + mainList.shopItems[key]);
                }
            }  else {
                i--;
            }
        }      
    }    
};


// chooseGoods();
 
// workTime(18);




// discountSystem(true);

console.log(mainList);



// dayBudget();



// employers();
