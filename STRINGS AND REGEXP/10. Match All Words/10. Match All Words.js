function solution(input) {
    let result = input.match(/\w+/g);
    return result.join('|');
}