// Task #1

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    var i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }

    return true;
}

var i = 0;
while (i < 100) {
    if (isPrime(i)) {
        console.log(i);
    }
    i++;
}

// Task #2

var goods = [];

function addItems() {
    var name = prompt("Введите название товара");
    var price = prompt("Введите стоимость товара");
    var quantity = prompt("Введите количество товара");
    goods.push([name,price,quantity]);
}

function countBasketPrice(arr) {
    var priceBasket = 0;
    for (var i = 0; i < arr.length; i++) {
        priceBasket = priceBasket + arr[i][1] * arr[i][2];
    }

    alert("Сумма товаров в вашей корзине равна: " + priceBasket + " руб");
}

addItems();
addItems();
countBasketPrice(goods);

// Task #3

for (var i = 0; i < 10; console.log(i++)) {}

// Task #4

for (var str = " "; str.length <= 20; str += "x") {
    console.log(str);
}