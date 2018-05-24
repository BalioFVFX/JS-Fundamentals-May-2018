function solution(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === input[i][j + 1]) {
                counter++;
            }
            if (input[i + 1] !== undefined && input[i][j] === input[i + 1][j]) {
                counter++;
            }
        }
    }
    return counter;
}