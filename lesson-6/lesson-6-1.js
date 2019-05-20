// Генерация блока Продуктов
function buildProductsList(items) {
    var $products = document.getElementById('products');
    $products.textContent = '';

    for (var i = 0; i < items.length; i++) {
        var $goods = document.createElement('div');
        $goods.dataset.number = i;
        $goods.classList.add('goods');

        var $img = document.createElement('img');
        $img.src = items[i].img;

        var $title = document.createElement('h2');
        $title.textContent = items[i].name + '(' + items[i].price + 'руб) ';

        var $button = document.createElement('button');
        $button.classList.add('button');
        $button.id = 'button';
        $button.textContent = 'купить';


        var $item = document.createElement('li');
        $item.classList.add('itemElement')
        $item.appendChild($img);
        $item.appendChild($title);
        $item.appendChild($button);
        $goods.appendChild($item);
        $products.appendChild($goods);
    }
}

// Генерация отрисовки корзины
function buildCartList() {
    var $cart;
    $cart.textContent = '';
    for (var i = 0; i < cart.length; i++) {
        var $goods = document.createElement('div');
        $goods.dataset.number = i;

    }
}

// Подсчет стоимости товаров в корзине
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

// Добавление товаров в корзину.
function addGoodsToCart(goods) {
    //goods.quantity = 1;
    cart.push(goods);
}

function handleButtonClick(event) {
    addGoodsToCart(products[event.target.parentNode.dataset.number]);
    init();
}

function init() {
    buildProductsList(products);
    countBasketPrice(cart)
    var $products = document.querySelector('#products');
    $products.addEventListener('click', handleButtonClick);
    var $cart = document.querySelector('#cart');
    $cart.addEventListener('click', handleButtonClick);
    }

window.addEventListener('load', init);


























var products = [
    {
        img: 'http://sdtekdirect.com/thumbs/az/sdtek/new-glass/GLASS-I7Q3/4.jpg',
        name: 'iPhone',
        price: 70000,
    },
    {
        img: 'http://baraden.ru/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/x/8/x8628d92015b03ed287eb76fba0af06ba.jpg.pagespeed.ic_.vmhv1lktdx1.jpg',
        name: 'Защитная пленка',
        price: 1500,
    },
    {
        img: 'https://vn-test-11.slatic.net/p/2/pin-sac-du-phong-xiaomi-10000mah-gen-2-new-2018-5105-60805192-bfe2be41d6bb61f2900a7906a18faa89-catalog.jpg_120x120q75.jpg',
        name: 'Power bank',
        price: 5000,
    },
];


var cart = [];

//buildProductsList(products);
//countBasketPrice(cart);




