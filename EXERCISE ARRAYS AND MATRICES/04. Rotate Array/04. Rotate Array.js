function solution(input) {
    let rotations = input.pop() % input.length;
    for (let i = 0; i < rotations; i++) {
        let lastElement = input.pop();
        input.unshift(lastElement);
    }
    return input.join(' ');
}