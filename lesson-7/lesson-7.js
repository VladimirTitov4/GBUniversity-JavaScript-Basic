function buildCatalog() {
    var $catalog = document.querySelector('#catalog');

    for (var i = 0; i < products.length; i++) {
        var $catalogTemplate = document.querySelector('#catalogTemplate').children[0].cloneNode(true);
        $catalogTemplate.querySelector('.title').textContent = products[i].name;
        $catalogTemplate.querySelector('.price').textContent = products[i].price;
        $catalogTemplate.querySelector('.picture').src = products[i].image;

        $catalogTemplate.querySelector('.button').dataset.id = products[i].id;
        $catalogTemplate.querySelector('.button').dataset.name = products[i].name;
        $catalogTemplate.querySelector('.button').dataset.price = products[i].price;
        $catalogTemplate.querySelector('.button').dataset.image = products[i].image;

        $catalog.appendChild($catalogTemplate);
    }
}

function buildCart() {
    var $cart = document.querySelector('#cart');

    for (var i = 0; i < cart.length; i++) {
        var $cartTemplate = document.querySelector('#cartTemplate').children[0].cloneNode(true);
        $cartTemplate.querySelector('.title').textContent = cart[i].name;
        $cartTemplate.querySelector('.price').textContent = cart[i].price;
        $cartTemplate.querySelector('.picture').src = cart[i].image;

        $cartTemplate.querySelector('.buttonDelete').dataset.id = cart[i].id;
        $cartTemplate.querySelector('.buttonDelete').dataset.name = cart[i].name;
        $cartTemplate.querySelector('.buttonDelete').dataset.price = cart[i].price;
        $cartTemplate.querySelector('.buttonDelete').dataset.image = cart[i].image;

        $cart.appendChild($cartTemplate);
    }
}

function isExist(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            return true;
        }
    }

    return false;
}

function findIdx(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            return i;
        }
    }
}

function handleBuyClick(event) {
    if(event.target.textContent === 'Buy') {
        if(isExist(+event.target.dataset.id)) {
            // Товар в корзине есть - нужно изменить количество
            var idx = findIdx(+event.target.dataset.id);
            cart[idx].quantity++;
        } else {
            // Товара в корзине ещё нет, нужно добавить
            cart.push({
                id: +event.target.dataset.id,
                name: event.target.dataset.name,
                price: +event.target.dataset.price,
                image: event.target.dataset.image,
                quantity: 1,
                }
            );
        }
        countBasketPrice(cart);
        buildCart();
    }
    // Если товар нужно удалить
    if(event.target.textContent === 'Delete') {
        if(cart.length >= 1) {
            cart.splice(+event.target.dataset.id - 1, 1);
            countBasketPrice(cart);
            buildCart();
        } else {
            cart = [];
            countBasketPrice(cart);
            buildCart();
        }
    }
}

function init() {
    buildCatalog();

    var $catalog = document.querySelector('#catalog');
    $catalog.addEventListener('click', handleBuyClick);

    var $cart = document.querySelector('#cart');
    $cart.addEventListener('click', handleBuyClick);
}

window.addEventListener('load', init);
