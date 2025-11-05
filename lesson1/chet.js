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
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert("0");
        break
    case 1:
        alert("1");
        break
    case 2:
    case 3:
        alert("2, 3");
        break
    default:
        alert("хуйня")

}