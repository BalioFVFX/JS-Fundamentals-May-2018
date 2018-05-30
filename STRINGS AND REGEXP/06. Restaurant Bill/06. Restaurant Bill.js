function solution(input) {
    let products = [];
    let prices = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            products.push(input[i]);
        }
        else {
            prices.push(Number(input[i]));
        }
    }
    console.log(`You purchased ${products.join(', ')} for a total sum of ${prices.reduce((a, b) => a + b)}`)
}