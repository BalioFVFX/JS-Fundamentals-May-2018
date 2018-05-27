function solution(input) {
    let sumOfRows = 0;
    let sumOfCols = 0;


    // Check col row sum
    for (let i = 0; i < input.length; i++) {
        sumOfCols += input[0][i];
    }

    // Check first col sum
    for (let i = 0; i < input.length; i++) {
        sumOfRows += input[i][0];
    }

    for (let i = 1; i < 2; i++) {
        let currentColSum = 0;
        for (let j = 0; j < input[i].length; j++) {
            currentColSum += input[i][j];
        }
        if (currentColSum !== sumOfCols) {
            return false;
        }
    }

    for (let i = 0; i < 1; i++) {
        let currentRowSum = 0;
        for (let j = 0; j < input.length; j++) {
            currentRowSum += input[j][1];
        }
        if (currentRowSum !== sumOfRows) {
            return false;
        }
    }

    if (sumOfRows === sumOfCols) {
        return true;
    }
    return false;

}