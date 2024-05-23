const xValue = prompt("Введите натуральное число");
const nValue = prompt("Введите еще одно натуральное число");

const x = parseInt(xValue, 10);
const n = parseInt(nValue, 10);

if (Number.isInteger(x) && Number.isInteger(n) && x > 0 && n > 0) {
    const raisePower = (x, n) => Math.pow(x, n);
    console.log(`Результат возведения ${x} в степень ${n}: ${raisePower(x, n)}`);
} else {
    console.log("Пожалуйста, введите два натуральных числа.");
}