function solution(input) {
    let width = input[0];
    let height = input[1];
    let x = input[3];
    let y = input[2];
    let matrix = createMatrix(width, height);


    let position = 1;
    let counter = 2;
    let fillCounter = 0;
    let roofLength = 3;

    while (true) {

        // Left Up To Right Up

        while (true) {

            if (y - position >= 0 && x - position + fillCounter >= 0 && x - position + fillCounter < matrix.length) {
                matrix[y - position][x - position + fillCounter] = counter;
            }


            if (fillCounter === roofLength - 1) {
                fillCounter = 0;
                break;
            }
            fillCounter++;
        }

        // Left Up To Left Down

        while (true) {

            if (y - position + fillCounter >= 0 && x - position >= 0 && y - position + fillCounter < matrix.length) {
                matrix[y - position + fillCounter][x - position] = counter;
            }

            if (fillCounter === roofLength - 1) {
                fillCounter = 0;
                break;
            }
            fillCounter++;
        }

        // Left Down To Right Down

        while (true) {
            if (y + position >= 0 && x - position + fillCounter >= 0 && y + position < matrix.length && matrix[y + position][x - position + fillCounter] !== undefined) {
                matrix[y + position][x - position + fillCounter] = counter;
            }


            if (fillCounter === roofLength - 1) {
                fillCounter = 0;
                break;
            }
            fillCounter++;
        }

        // Right Up To Right Down

        while (true) {
            if (y - position + fillCounter >= 0 && x + position >= 0 && x + position < matrix.length && y - position + fillCounter < matrix.length) {
                matrix[y - position + fillCounter][x + position] = counter;
            }

            if (fillCounter === roofLength - 1) {
                fillCounter = 0;
                break;
            }
            fillCounter++;
        }


        counter++;
        position++;
        roofLength++;
        roofLength += 2;

        if (position === matrix.length && position) {
            break;
        }
    }
    matrix[y][x] = 1;
    printMatrix(matrix);

    function printMatrix(matrix) {
        let matrixStr = '';
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrixStr += matrix[i][j] + ' ';
            }
            matrixStr += '\n';
        }
        console.log(matrixStr);
    }

    function createMatrix(width, height) {
        let arr = [];
        for (let i = 0; i < width; i++) {
            arr[i] = [];
            for (let j = 0; j < height; j++) {
                arr[i][j] = 0;
            }
        }
        return arr;
    }
}