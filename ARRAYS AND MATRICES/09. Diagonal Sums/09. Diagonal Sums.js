function solution(input) {
    let leftToRightSum = 0;
    let rightToLeftSum = 0;
    for (let i = 0; i < input.length; i++) {
        leftToRightSum += input[i][i];
        rightToLeftSum += input[i][input.length - 1 - i];
    }
    console.log(leftToRightSum, rightToLeftSum);
}