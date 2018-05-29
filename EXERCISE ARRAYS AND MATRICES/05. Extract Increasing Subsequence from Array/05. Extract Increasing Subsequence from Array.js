function solution(input) {
    let biggestNumber = input[0];
    let numbers = [];
    numbers.push(biggestNumber);
    for (let i = 1; i < input.length; i++) {
        if (input[i] >= biggestNumber) {
            biggestNumber = input[i];
            numbers.push(biggestNumber);
        }

    }
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}