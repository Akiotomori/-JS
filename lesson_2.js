let a = 1, b = 1
let c = ++a // c = 2, a = 2
let d = b++ // d = 1, b = 2

let f = 2
let x = 1 + (f *= 2) // f = 4, x = 5 

"" + 1 + 0 // 10
"" - 1 + 0 // 1-
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // nan
"  -9  " + 5 // ' -9 5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // nan 
" \t \n" - 2 // -2

let g = +prompt("Первое число?", 1);
let h = +prompt("Второе число?", 2);
alert(g + h); // 3

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

let js = prompt('Какое официальное название JavaScript?')
    if (js == 'ECMAScript') {
        alert('Верно!')
    }
    else {
        alert('Не знаете? ECMAScript!')
    }


let number = +prompt("Введите число")
    if (number > 0) {
        alert(1)
    }
    else if (number < 0) {
        alert(-1)
    }
    else {
        alert(0)
    }


let qa = 1
let qc = 4 
let message = (qa+qc<4)? 'Моло': 'Много';
alert (message) 


let worker = prompt('Ваш логин?')
let ms = (worker == 'Сотрудник')? 'Привет':
         (worker == 'Директор')? 'Здраствуйте':
         'Нет логина'
alert(ms)