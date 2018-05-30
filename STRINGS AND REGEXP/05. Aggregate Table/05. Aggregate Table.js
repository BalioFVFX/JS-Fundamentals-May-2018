function solution(input) {
    let cities = [];
    let incomes = [];

    for (let i = 0; i < input.length; i++) {
        let result = input[i].split('|').map((t) => t.trim());
        let city = result[1];
        let income = Number(result[2]);
        cities.push(city)
        incomes.push(income);
    }
    console.log(cities.join(', '));
    console.log(incomes.reduce((a, b) => a + b));
}