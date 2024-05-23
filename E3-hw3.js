function numberAddition(firstNumber){
    return function(secondNumber){
        return firstNumber + secondNumber;
    };
}

const addSeven = numberAddition(7);
console.log(addSeven(10));