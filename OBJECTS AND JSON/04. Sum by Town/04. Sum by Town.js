function solution(input) {
    let cities = {};
    for (let i = 0; i < input.length; i += 2) {
        let city = input[i];
        let income = Number(input[i + 1]);
        if (!cities.hasOwnProperty(city)) {
            cities[city] = 0;
        }
        cities[city] += income;
    }
    cities = JSON.stringify(cities);
    console.log(cities);
}

solution(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);