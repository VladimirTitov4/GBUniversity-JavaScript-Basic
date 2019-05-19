function buildProductsList(items) {
    var $catalog = document.getElementById('catalog');

    for (var i = 0; i < items.length; i++) {
        var $img = document.createElement('img');
        $img.src = items[i].img;

        var $title = document.createElement('h2');
        $title.textContent = items[i].name + '(' + items[i].price + 'руб) ';

        var $item = document.createElement('li');
        $item.appendChild($img);
        $item.appendChild($title);

        $catalog.appendChild($item);
    }
}


var catalog = [
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

buildProductsList(catalog);




