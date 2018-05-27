function solution(rows, cols) {
    let counter = 0;

    let matrix = createMatrix(rows, cols);

    let position = 'Right';
    let positionX = -1;
    let positionY = 0;

    while (counter !== rows * cols) {
        counter++;
        if (position === 'Right') {
            positionX++;
            if (isInvalidPosition(matrix, positionX, positionY)) {
                position = 'Down';
                positionX--;
                counter--;
                continue;
            }
            matrix[positionY][positionX] = counter;
        }
        else if (position === 'Down') {
            positionY++;
            if (isInvalidPosition(matrix, positionX, positionY)) {
                position = 'Left';
                positionY--;
                counter--;
                continue;
            }
            matrix[positionY][positionX] = counter;
        }
        else if (position === 'Left') {
            positionX--;
            if (isInvalidPosition(matrix, positionX, positionY)) {
                position = 'Up';
                positionX++;
                counter--;
                continue;
            }
            matrix[positionY][positionX] = counter;
        }
        else if (position === 'Up') {
            positionY--;
            if (isInvalidPosition(matrix, positionX, positionY)) {
                position = 'Right';
                positionY++;
                counter--;
                continue;
            }
            matrix[positionY][positionX] = counter;
        }

    }


    function isInvalidPosition(matrix, positionX, positionY) {
        if (positionY === rows || matrix[positionY][positionX] !== 0) {
            return true;
        }
        return false;
    }

    function printMatrix(matrix) {
        let matrixStr = "";
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                matrixStr += matrix[i][j] + ' ';
            }
            matrixStr += '\n';
        }
        console.log(matrixStr);
    }

    function createMatrix(rows, cols) {
        let arr = [];
        for (let i = 0; i < rows; i++) {
            arr[i] = [];
            for (let j = 0; j < cols; j++) {
                arr[i][j] = 0;
            }
        }
        return arr;
    }

    printMatrix(matrix);
}