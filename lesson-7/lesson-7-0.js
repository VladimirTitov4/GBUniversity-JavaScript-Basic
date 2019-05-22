var cart = [];

var products = [
    {
        id: 1,
        name: 'iPhone',
        price: 70000,
        image: '',
    },
    {
        id: 2,
        name: 'Защитная пленка',
        price: 1500,
        image: '',
    },
    {
        id: 3,
        name: 'Power bank',
        price: 5000,
        image: '',
    },
];

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

