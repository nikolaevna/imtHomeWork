// Создать функцию double(), которая будет принимать в качестве аргумента число и удваивать его.
//     Удвоенное число либо пусть функция возвращает через return, либо сразу выводит через console.log.
//     Например double(5) выдаст 10.

var number = +prompt('Введите число и мы его удвоим');
var result = double(number);
console.log('Итого', result);

function double(_number) {
    return result = _number + _number;
}


// Создать функцию greet(), которая через prompt() будет спрашивать имя пользователя и здороваться с ним,
//     выводя на экран "Привет, <здесь будет имя>

var name = prompt('Представтесь, пожалуйста');
greet(name);

function greet(_name) {
    if (_name === '') alert('Введите хотя б один символ');
    else {
        alert('Привет,' + ' ' + _name + '!');
    }
}


// Создать функцию exponent() таким образом, чтобы можно было вызвать её до создания (вспомните что такое Function Expression
// и Function Declaration и выберете способ). Эта функция должна возводить в степень число. Она принимает на вход два
// параметра: число и степень. Поскольку возведение в степень - это умножение самого себя заданное число раз,
//     то организовать всё умножением через цикл (while или for).

var x = +prompt('число, которое возводится в степень', '');
var n = +prompt('в степени?', '');
var resultExponent;

exponent(x, n);

console.log(x + ' в степени ' + n + ' = ' + resultExponent);

function exponent(_x, _n) {
    resultExponent = _x;

    for (var i = 1; i < _n; i++) {
        resultExponent *= _x;
    }

    return resultExponent;
}

// Создайте массив случайных целых чисел от 50 до 100, используя цикл цикл for. Размер массива пусть будет 20.
// Выведите отдельным циклом for элементы массива с чётным индексом без применения проверки через if.
// Т.е. вариант if (i % 2 == 0) нельзя использовать. Подсказка: у цикла for можно писать не только i++,
//     но и что-то вроде i+=3 (в этом случае счётчик будет каждый раз расти на 3 единицы, использовать callback)

//в процессе...