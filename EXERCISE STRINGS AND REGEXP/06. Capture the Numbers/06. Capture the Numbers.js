function solution(input) {
    let regex = /\d+/g;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let match = input[i].match(regex);
        if (match !== null) {
            for (let j = 0; j < match.length; j++) {
                result.push(match[j]);
            }
        }
    }
    return result.join(' ');
}