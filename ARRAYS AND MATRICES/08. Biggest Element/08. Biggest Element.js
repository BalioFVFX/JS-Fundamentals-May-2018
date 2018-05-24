function solution(input) {
    let maxNumber = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] > maxNumber) {
                maxNumber = input[i][j];
            }
        }
    }
    return maxNumber;
}