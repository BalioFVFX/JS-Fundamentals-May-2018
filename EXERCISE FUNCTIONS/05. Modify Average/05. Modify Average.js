function solution(input) {
    let modify = (number) => Number(number.toString() + 9);
    while (isBelowAverage(input)) {
        input = modify(input);
    }

    console.log(input);

    function isBelowAverage(number) {
        let result = 0;
        let numberStr = number.toString();
        for (let i = 0; i < number.toString().length; i++) {
            result += Number(numberStr[i]);
        }

        result /= numberStr.length;

        if (result > 5) {
            return false;
        }
        return true;
    }
}