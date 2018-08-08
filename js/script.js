let monthBudget = +prompt("Ваш бюджет на месяц", "50000");
let shopName = prompt("Название вашего магазина", "FunnyShop");

mainList = {
    monthBudget,
    shopName,
    shopGoods: [],
    employers: {},
    open
}

let goodsToSellFirst = prompt("Какой тип товаров будем продавать?");
let goodsToSellSecond = prompt("Какой тип товаров будем продавать?");
let goodsToSellThird = prompt("Какой тип товаров будем продавать?");

mainList.shopGoods[goodsToSellFirst, goodsToSellSecond, goodsToSellThird];

alert("Дневной бюджет составляет " + monthBudget/30);