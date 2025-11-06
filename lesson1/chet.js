// for (let i = 2; i<=10; i++) {
//
//     if (i%2 === 0) {
//         console.log(i)
//
//     } else {
//
//         console.log(`Нечетное число ${i}`)
//     }
//
// }
// let i = 0;
// while (i < 3) {
//     console.log(i)
//     i++
// }
//
// while (true) {
//     let number = prompt("Введите число")
//     if (number > 100) {
//         break
//     }
// }
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//         alert("0");
//         break
//     case 1:
//         alert("1");
//         break
//     case 2:
//     case 3:
//         alert("2, 3");
//         break
//     default:
//         alert("хуйня")
//
// }
//
// function checkAge(age=18) {
//     let result = (age > 18) ? true : confirm('Родители разрешили?');
//     return result
// }
//
//
// if (checkAge()) {
//     alert("доступно")
// } else {
//     alert("нет")
//
// }
//
// function min(a, b) {
//     if (a - b < 0) {
//         return a;
//     } else {
//         return b
//     }
// }
//
// console.log(min(2, 2))

// function pow(x, n) {
//
//     return Math.pow(x, n)
//
// }
//
// console.log(pow(2, 3));
//
// function multiply(a, b) {
//     return a * b;
// }
//
// console.log(multiply(5, 5))
// function isMaxim(a) {
//     if (a === "Максим") {
//         return "Гей";
//     }
//     if (!a) {
//         return "пиши, ёпт";
//     }
//     if (a !== "Максим") {
//         return "Отлично"
//     }
// }
//
// console.log(isMaxim("Максим"))
// let hp = 100;
//
// function attack(a = 10, b = 1) {
//
//     hp = hp - a * b
//     if (hp <= 0) {
//         return "Ты помер"
//     }
//     return `Осталось ${hp}`
// }
//
// console.log(attack(20, 2))
// console.log(attack(50))
// console.log(attack(50))