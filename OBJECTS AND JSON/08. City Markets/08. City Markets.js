function solution(input) {
    let map = new Map();
    for (let i = 0; i < input.length; i++) {
        let currentData = input[i].split(/ -> | : /).filter(w => w !== '');
        let town = currentData[0];
        let product = currentData[1];
        let amountOfSales = Number(currentData[2]);
        let priceForOneUnit = Number(currentData[3]);

        if (!map.has(town)) {
            map.set(town, new Map());
        }
        let currentDataMap = new Map();
        currentDataMap.set(product, amountOfSales * priceForOneUnit);
        map.set(town, map.get(town).set(product, amountOfSales * priceForOneUnit))

    }

    for (let [key, value] of map.entries()) {
        console.log(`Town - ${key}`);
        for (const valueElement of value) {
            console.log(`$$$${valueElement[0]} : ${valueElement[1]}`);
        }
    }
}