// Задание №1

function chessBoard() {

    var $block = document.getElementById('block');
    var $firstRow = document.createElement('div');
    $firstRow.classList.add('mainColumn');

    for(var i = 0; i < 8; i++){
        var lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        var $lettersDiv = document.createElement('div');
        $lettersDiv.classList.add('letters');
        $lettersDiv.textContent = lettersArray[i];
        $firstRow.appendChild($lettersDiv)
    }
    var $copy_firstRow = $firstRow.cloneNode(true);
    $block.appendChild($firstRow);

    for (var j = 8; j > 0 ; j--) {
        var $secondRow = document.createElement('div'); // Создали массив
        $secondRow.classList.add('mainRow1');   // Добавили класс "mainRow"

        var $numbersDiv = document.createElement('div'); // Создали массив, который будет внутри массива "mainRow"
        $numbersDiv.classList.add('numbers') // Добавили класс "numbers"
        $numbersDiv.textContent = j; // Добавили текущее имя поля
        var $copy_numbersDiv = $numbersDiv.cloneNode(true); // Создали копию массива

        $secondRow.appendChild($numbersDiv); // Засунули массив с классом "numbers" в массив с классом "mainRow"

            for (var i = 0; i < 8; i++) {
                var $cellDiv = document.createElement('div');
                $cellDiv.classList.add('row1','row2');
                if (i % 2 !== 0) {
                    $cellDiv.classList.remove('row1')
                }

                $secondRow.appendChild($cellDiv);

                if (j % 2 !== 0) {
                    $cellDiv.classList.toggle('row1')
                }

            }

        $secondRow.appendChild($copy_numbersDiv); // Засунули массив с классом "numbers" в массив с классом "mainRow"
        $block.appendChild($secondRow); // Засунули оба массива "mainRow" и "numbers" в основной массив
        $block.appendChild($copy_firstRow);
    }
}

chessBoard();




