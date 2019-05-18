// Task #3

var a = prompt("Введите число а");
var b = prompt("Введите число b");

if (a>=0 && b>=0) {
    alert(a-b);
} else if(a<0 && b<0) {
    alert(a*b);
} else if(a>0 && b<0 || a<0 && b>0) {
    alert(a+b);
}

// Task #4

var a = +prompt("Введите число от 0 до 15");
switch (a) {
    case 0:
        alert(a++);
    case 1:
        alert(a++);
    case 2:
        alert(a++);
    case 3:
        alert(a++);
    case 4:
        alert(a++);
    case 5:
        alert(a++);
    case 6:
        alert(a++);
    case 7:
        alert(a++);
    case 8:
        alert(a++);
    case 9:
        alert(a++);
    case 10:
        alert(a++);
    case 11:
        alert(a++);
    case 12:
        alert(a++);
    case 13:
        alert(a++);
    case 14:
        alert(a++);
    case 15:
        alert(a++);
}

// Task #5

function f1(x, y) {
    return x+y;
}

function f2(x, y) {
    return x-y;
}

function f3(x, y) {
    return x*y;
}

function f4(x, y) {
    return x/y;
}

var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");

var c = f1(a, b);
alert("Сумма чисел a и b равна " + c);

c = f2(a, b);
alert("Разница чисел a и b равна " + c);

c = f3(a, b);
alert("Умножение чисел a и b равна " + c);

c = f4(a, b);
alert("Деление чисел a и b равна " + c);

// Task #6

function f1(arg1, arg2, operation) {
    switch (operation) {
        case "сложение":
            return arg1+arg2;
        case "вычитание":
            return arg1-arg2;
        case "умножение":
            return arg1*arg2;
    }
}

var a = +prompt("Введите число а");
var b = +prompt("Введите число b");
var k = prompt("Введите одно их трех: сложение, вычитание, умножение")
var c = f1(a, b, k);
alert(c)

// Task #7

function power(val, pow) {
    var result = val * val;
    if (pow > 2) {
        result = val * power(val, pow-1);
    }

    return result;
}

var n = +prompt("Введите число");
var s = +prompt("Введите степень");
n = power(n, s);
alert("Результат возведения в заданную степень равен: " + n);






