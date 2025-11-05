let login = prompt("Введите логин")
console.log(login)
if (login === null) alert("Отменено")
if (login !== "Админ" && login !== null) alert("Я вас не знаю")
if (login === "Админ") {

    let pass = prompt("Введите пароль")
    if (pass === null) alert("Отменено")
    if (pass !== "Я главный" && pass !== null) alert("Неверный пароль")
    if (pass === "Я главный") alert("Здравствуйте!")
}

