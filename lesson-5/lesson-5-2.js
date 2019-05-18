function countBasketPrice(cart) {
    var priceBasket = 0;
    var n = 0;

    for (var i = 0; i < cart.length; i++) {
        priceBasket = priceBasket + cart[i].price * cart[i].quantity;
        n += cart[i].quantity
    }

    var message = '';

    if (cart.length == 0) {
        message = 'Корзина пуста';
    } else {
        message = 'В корзине ' + n + ' товара, ' + '\nНа сумму ' + priceBasket + ' рублей';
    }

    var $cart = document.getElementById('block2');
    $cart.textContent = message;
}
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
    },
];


countBasketPrice(goods);



