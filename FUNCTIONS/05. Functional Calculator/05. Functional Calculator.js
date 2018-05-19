function solution(firstNumber, secondNumber, operator){
    let summation = function() {return firstNumber + secondNumber};
    let subtraction = function() {return firstNumber - secondNumber};
    let multiplication = function() {return firstNumber * secondNumber};
    let division = function() { return firstNumber / secondNumber};

    switch(operator){
        case '+':
            return summation();
        case '-':
            return subtraction();
        case '*':
            return multiplication();
        case '/':
            return division();
        default:
            return 'error';
    }
}