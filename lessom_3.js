alert (null || 2 || undefined) // 2
alert (alert(1) || 2 || alert(3) ) // 1 потом 2
alert (1 && null && 2 ) // null
alert (alert(1) && alert(2)) // 1 и undefined
alert (null || 2 && 3 || 4)  // 3


let value = NaN
value &&= 10
value ||= 20
value &&= 30
value ||= 40
alert(value) // 30

let age = +prompt('Введите свой возраст')
    if (age >=14 && age <= 90) {
        alert('То')
    }
    else {
        alert('Не то')
    }

let login = prompt('Введите пароль','')
    if (login === 'Админ') {
        let password = prompt('Пароль?','')
        if (password === 'Я главный') {
            alert('Здравствуйте!')
        }
        else if (password === '' || password === null){
            alert ('Отменено')
        }
        else {
            alert('Неверный пароль')
        }
    }
    else if (login === '' || login === null) {
        alert('Отменено')
    }
    else {
        alert ('Я вас не знаю') 
    }