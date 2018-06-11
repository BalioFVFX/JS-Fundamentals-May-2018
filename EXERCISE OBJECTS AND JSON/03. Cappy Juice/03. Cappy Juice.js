function solution(input) {
    let juices = {};
    let bottles = new Map();
    for (let i = 0; i < input.length; i++) {
        let currentJuice = input[i].split(' => ');
        let currentJuiceName = currentJuice[0];
        let currentJuiceQuantity = Number(currentJuice[1]);
        if (!juices.hasOwnProperty(currentJuiceName)) {
            juices[currentJuiceName] = 0;
        }
        juices[currentJuiceName] += currentJuiceQuantity;
        while (juices[currentJuiceName] >= 1000) {
            juices[currentJuiceName] -= 1000;
            if (!bottles.has(currentJuiceName)) {
                bottles.set(currentJuiceName, 0);
            }
            bottles.set(currentJuiceName, bottles.get(currentJuiceName) + 1);
        }
    }

    for (let [key, value] of bottles) {
        console.log(`${key} => ${value}`);
    }
}

solution(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);