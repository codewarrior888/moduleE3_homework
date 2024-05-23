function isPrime(num) {
    if (isNaN(num)) {
        return "Вы ввели не число";
    }

    if (num > 1000) {
        return "Данные неверны.\nВведите натуральное число не больше 1000";
    }

    if (!Number.isInteger(num)) {
        return "Число не является целым";
    }

    if (num <= 1) {
        return "Число не является простым";
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Число не является простым";
        }
    }

    return "Число является простым";
}

const inputValue = prompt('Введите любое число не больше 1000');
let num = +inputValue;
console.log(isPrime(num));