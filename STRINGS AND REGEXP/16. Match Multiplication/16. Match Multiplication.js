function solution(input) {
    let regex = /([0-9-]+)[\s]*\*[\s]*([0-9.-]+)/g;
    let match = regex.exec(input);
    while (match !== null) {
        input = input.replace(match[0], () => Number(match[1]) * Number(match[2]));
        match = regex.exec(input);
    }
    console.log(input);
}