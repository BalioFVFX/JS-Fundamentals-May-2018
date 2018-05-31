function solution(input) {
    let regex = /www\.[a-zA-Z-0-9]+(\.[a-z]+)+/g;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let match = input[i].match(regex);
        if (match !== null) {
            for (let j = 0; j < match.length; j++) {
                result.push(match[j]);
            }
        }
    }
    return result.join('\n');
}

console.log(solution(['Join WebStars now for free, at www.web-stars.com\n' +
    'You can also support our partners:\n' +
    'Internet - www.internet.com\n' +
    'WebSpiders - www.webspiders101.com\n' +
    'Sentinel - www.sentinel.-ko ']));