function solution(input) {
    let sum = 0;
    let isMagicalCol = true;
    let isMagicalRow = true;
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < input[i].length; j++) {
            sum += input[i][j];
        }
    }
    for (let i = 1; i < input.length; i++) {
        let currentSum = 0;
        for (let j = 0; j < input[i].length; j++) {
            currentSum += input[i][j];
        }
        if (currentSum !== sum) {
            isMagicalCol = false;
            break;
        }
    }

    for (let i = 0; i < input[0].length; i++) {
        let rowSum = 0;
        for (let j = 0; j < input.length; j++) {
            rowSum += input[j][0];
        }
        if (rowSum !== sum) {
            isMagicalRow = false;
            break;
        }
    }
    if (isMagicalRow === true && isMagicalCol === true) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}

function magic(input) {
    let matrix = input;
    let sumInitial = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = matrix[row].reduce((a, b) => a + b, 0);
        if (sumRow != sumInitial) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[col][row];
        }
        if (sumCol != sumInitial) {
            return false;
        }
    }

    return true;
}

console.log(magic([[5, 7, 9], [9, 7, 5], [7, 5, 9]]));
solution([[5,7,9],[9,7,5],[7,5,9]]);