function solution(input) {
    let steps = Number(input.pop());

    for (let i = 0; i < input.length; i += steps) {
        console.log(input[i]);
    }
}