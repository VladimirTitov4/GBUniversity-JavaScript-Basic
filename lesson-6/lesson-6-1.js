// Генерация блока Продуктов
function buildProductsList(items) {
    var $catalog = document.querySelector('#catalog')
    $catalog.textContent = '';

    for (var i = 0; i < items.length; i++) {
        var $goods = document.createElement('li');
        $goods.dataset.number = i;
        $goods.classList.add('goods');

        var $title = document.createElement('h2');
        $title.textContent = items[i].name + '(' + items[i].price + 'руб) ';

        var $button = document.createElement('button');
        $button.classList.add('button');
        $button.textContent = 'купить';

        $goods.classList.add('itemElement');
        $goods.appendChild($title);
        $goods.appendChild($button);

        $catalog.appendChild($goods);
    }
}

// Подсчет стоимости товаров в корзине.
function countBasketPrice(cart) {
    var priceBasket = 0;
    var n = 0;

    for (var i = 0; i < cart.length; i++) {
        priceBasket = priceBasket + cart[i].price * cart[i].quantity;
        n += cart[i].quantity
    }

    var message = '';

    if (cart.length === 0) {
        message = 'Корзина пуста';
    } else {
        message = 'В корзине ' + n + ' товара, ' + '\nНа сумму ' + priceBasket + ' рублей';
    }

    var $cart = document.getElementById('cart');
    $cart.textContent = message;
}

function isExist(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            return true;
            console.log(cart[i].id);
        }
    }
}

function addToCart(goods) {
    goods.quantity = 1;
    cart.push(goods);
}

function handleButtonClick(event) {
    if (event.target.textContent === 'купить') {
        if (isExist(event.target.parentNode.dataset.number)) {
            console.log('Такой товар в корзине есть');
        } else {
            addToCart(products[event.target.parentNode.dataset.number]);
            countBasketPrice(cart);
            console.log('Такого товара в корзине нет');

        }
    }
}

function init() {
    buildProductsList(products);

    var $catalog = document.querySelector('#catalog');
    $catalog.addEventListener('click', handleButtonClick);
    }

window.addEventListener('load', init);























var cart = [];



var products = [
    {
        id: 1,
        name: 'iPhone',
        price: 70000,
        quantity: 0,
    },
    {
        id: 2,
        name: 'Защитная пленка',
        price: 1500,
        quantity: 0,
    },
    {
        id: 3,
        name: 'Power bank',
        price: 5000,
        quantity: 0,
    },
];







