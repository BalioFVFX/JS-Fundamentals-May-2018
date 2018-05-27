function solution(input, input2) {

    let matrix = createMatrix(input);
    let pollutedAreas = createPollutedAreas(input2);
    let pollutedAreasStr = 'Polluted areas:';


    for (let i = 0; i < pollutedAreas.length; i++) {

        let pollutionValue = Number(Object.values(pollutedAreas[i]).toString());
        if (Object.keys(pollutedAreas[i]).toString() === 'breeze') {
            for (let j = 0; j < matrix[pollutionValue].length; j++) {
                matrix[pollutionValue][j] -= 15;
                if (matrix[pollutionValue][j] < 0) {
                    matrix[pollutionValue][j] = 0;
                }
            }
        }
        else if (Object.keys(pollutedAreas[i]).toString() === 'gale') {
            for (let j = 0; j < matrix.length; j++) {
                matrix[j][pollutionValue] -= 20;
                if (matrix[j][pollutionValue] < 0) {
                    matrix[j][pollutionValue] = 0;
                }
            }
        }
        else if (Object.keys(pollutedAreas[i]).toString() === 'smog') {
            for (let j = 0; j < matrix.length; j++) {
                for (let k = 0; k < matrix[j].length; k++) {
                    matrix[j][k] += pollutionValue;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                pollutedAreasStr += ` [${i}-${j}],`;
            }
        }
    }

    if (pollutedAreasStr !== 'Polluted areas:') {
        pollutedAreasStr = pollutedAreasStr.substr(0, pollutedAreasStr.length - 1);
        console.log(pollutedAreasStr);
    }
    else {
        console.log('No polluted areas');
    }


    function createMatrix(input) {
        let arr = [];
        for (let i = 0; i < input.length; i++) {
            arr[i] = input[i].split(' ').map(n => Number(n));
        }
        return arr;
    }

    function createPollutedAreas(input2) {
        let arr = [{}];

        for (let i = 0; i < input2.length; i++) {
            let current = input2[i].split(' ');
            let areas = {};
            areas[current[0]] = Number(current[1]);
            arr[i] = areas;
        }
        return arr;
    }

    createMatrix(input);
}