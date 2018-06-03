function solution(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let currentData = input[i].split(' <-> ');
        let town = currentData[0];
        let population = Number(currentData[1]);

        if (!map.has(town)) {
            map.set(town, 0);
        }
        map.set(town, map.get(town) + population);
    }

    for (let [key, value] of map.entries()) {
        console.log(`${key} : ${value}`);
    }
}