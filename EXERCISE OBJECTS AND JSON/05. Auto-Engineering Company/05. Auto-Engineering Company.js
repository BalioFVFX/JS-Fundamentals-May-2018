function solution(input) {
    let cars = new Map();
    for (let i = 0; i < input.length; i++) {
        let currentCar = input[i].split(' | ');
        let currentCarName = currentCar[0];
        let currentCarModel = currentCar[1];
        let currentCarPrice = Number(currentCar[2]);


        if (!cars.has(currentCarName)) {
            let currentCarData = new Map();
            currentCarData.set(currentCarModel, currentCarPrice);
            cars.set(currentCarName, currentCarData);
        }
        else {
            // If there is the same car and the same model:
            if (cars.get(currentCarName).has(currentCarModel)) {
                cars.get(currentCarName).set(currentCarModel, cars.get(currentCarName).get(currentCarModel) + currentCarPrice);
            }
            else {
                cars.get(currentCarName).set(currentCarModel, currentCarPrice);
            }
        }
    }
    for (const carName of cars) {
        console.log(carName[0]);
        for (const carData of carName[1]) {
            console.log(`###${carData[0]} -> ${carData[1]}`)
        }
    }
}

solution(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);