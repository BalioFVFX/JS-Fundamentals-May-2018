function solution(input) {
    let matrix = createMatrix(input);

    let leftToRightSum = 0;
    let rightToLeftSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            leftToRightSum += matrix[i][j];
            i++;
        }
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = matrix.length - 1; j >= 0; j--) {
            rightToLeftSum += matrix[i][j];
            i--;
        }

    }

    if (leftToRightSum === rightToLeftSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i !== j && j !== matrix.length - 1 - i) {
                    matrix[i][j] = rightToLeftSum;
                }
            }
        }
    }
    let output = '';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            output += matrix[i][j] + ' ';
        }
        output += '\n';
    }
    console.log(output);


    function createMatrix(input) {
        let matrix = [];
        for (let i = 0; i < input.length; i++) {
            matrix[i] = input[i].split(' ').map(n => Number(n));
        }
        return matrix;
    }
}