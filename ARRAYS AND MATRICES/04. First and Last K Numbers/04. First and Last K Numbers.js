function solution(input) {
    let numOfElements = input.shift();
    let firstElements = input.slice(0, numOfElements);
    let lastElements = input.slice(input.length - numOfElements);
    return firstElements.join(' ') + '\n' + lastElements.join(' ');
}