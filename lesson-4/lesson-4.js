// Задание №1

function numToObject(num) {
    var obj = {};
    if (num < 0 || num > 999 || isNaN(num)) {
        console.log("Incorrect number")
    }
    else {
        obj['Единицы'] = num % 10;
        obj['Десятки'] = (num - obj['Единицы']) % 100 / 10;
        obj['Сотни'] = (num - obj['Единицы'] - obj['Десятки']*10) % 1000 / 100;
        return obj;
    }
}

var num = +prompt("Enter number")
console.log(numToObject(num));


// Задание №2

var goods = [
    {
        name: 'Sunglasses',
        price: 1000,
        quantity: 1,
    },
    {
        name: 'Trousers',
        price: 3000,
        quantity: 1,
    },
    {
        name: 'Sweater',
        price: 1800,
        quantity: 2,
    }
]
function countBasketPrice(object) {
    var priceBasket = 0;
    for (var i = 0; i < object.length; i++) {
        priceBasket = priceBasket + object[i].price * object[i].quantity;
    }

    alert("Сумма товаров в вашей корзине равна: " + priceBasket + " руб");
}


countBasketPrice(goods);

