function solution(arr) {
    let input = arr.join(' ').split(' ');
    let results = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '32656' &&
            input[i + 1] === '19759' &&
            input[i + 2] === '32763' &&
            input[i + 3] === '0' &&
            input[i + 5] === '0') {
            let size = Number(input[i + 4]);
            let startIndex = i + 6;
            let counter = 0;
            let result = '';
            while (counter !== size) {
                result += String.fromCharCode(input[startIndex + counter]);
                counter++;
            }
            results.push(result);
        }
    }
    console.log(results.join('\n'));
}