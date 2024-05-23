const from = parseInt(prompt("Введите первое число:"), 10);
const to = parseInt(prompt("Введите второе число:"), 10);

if (!isNaN(from) && !isNaN(to) && from <= to) {
    let current = from;

    const intervalId = setInterval(function () {
        console.log(current);
        if (current === to) {
            clearInterval(intervalId);
            console.log("Вывод чисел завершен!");
        }
        current++;
    }, 1000);
} else {
    console.log("Введите два целых числа, где начальное число меньше или равно второму.");
}