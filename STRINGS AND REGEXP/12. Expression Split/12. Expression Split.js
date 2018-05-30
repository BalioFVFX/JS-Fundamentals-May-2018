function solution(input) {
    let result = input.split(/[(),;. \t]/g);
    result = result.filter(w => w !== '');
    return result.join('\n');
}