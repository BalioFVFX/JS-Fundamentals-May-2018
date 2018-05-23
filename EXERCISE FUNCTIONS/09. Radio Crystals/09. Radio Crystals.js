function solution(input) {
    let targetThickness = input[0];
    let operationCounter = 0;

    let cut = (currentChunk) => {
        while (true) {
            if (currentChunk / 4 >= targetThickness) {
                currentChunk /= 4;
                operationCounter++;
            }
            else {
                if (operationCounter > 0) {
                    console.log(`Cut x${operationCounter}`);
                    operationCounter = 0;


                    // Washing
                    console.log('Transporting and washing');
                    currentChunk = Math.floor(currentChunk);
                }
                return currentChunk;
            }
        }
    };

    let lap = (currentChunk) => {
        while (true) {
            let cut = currentChunk * 0.20;
            if (currentChunk - cut >= targetThickness) {
                currentChunk -= cut;
                operationCounter++;
            }
            else {
                if (operationCounter > 0) {
                    console.log(`Lap x${operationCounter}`);
                    operationCounter = 0;

                    // Washing
                    console.log('Transporting and washing');
                    currentChunk = Math.floor(currentChunk);
                }
                return currentChunk;
            }
        }
    };

    let grind = (currentChunk) => {
        while (true) {

            if (currentChunk - 20 >= targetThickness) {
                currentChunk -= 20;
                operationCounter++;
            }
            else {
                if (operationCounter > 0) {
                    console.log(`Grind x${operationCounter}`);
                    operationCounter = 0;


                    // Washing
                    console.log('Transporting and washing');
                    currentChunk = Math.floor(currentChunk);
                }
                return currentChunk;
            }
        }
    };

    let etch = (currentChunk) => {
        while (true) {

            if (currentChunk - 2 >= targetThickness - 1) {
                currentChunk -= 2;
                operationCounter++;
            }
            else {
                if (operationCounter > 0) {
                    console.log(`Etch x${operationCounter}`);
                    operationCounter = 0;


                    // Washing
                    console.log('Transporting and washing');
                    currentChunk = Math.floor(currentChunk);
                }
                return currentChunk;
            }
        }
    };

    let xRay = (currentChunk) => {
        if (currentChunk !== targetThickness) {
            currentChunk++;
            console.log('X-ray x1');
            return currentChunk;
        }
        return currentChunk;
    };

    for (let i = 1; i < input.length; i++) {
        let currentChunk = input[i];
        console.log(`Processing chunk ${currentChunk} microns`);

        currentChunk = cut(currentChunk);
        currentChunk = lap(currentChunk);
        currentChunk = grind(currentChunk);
        currentChunk = etch(currentChunk);
        currentChunk = xRay(currentChunk);

        console.log(`Finished crystal ${currentChunk} microns`);
    }
}