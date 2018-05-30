function solution(input) {
    let result = [];
    let leftIndex = input.indexOf('(');
    let rightIndex = input.indexOf(')');
    while (leftIndex !== -1 && rightIndex !== -1) {
        if (leftIndex < rightIndex) {
            let text = input.substring(leftIndex + 1, rightIndex);
            result.push(text);
        }
        leftIndex = input.indexOf('(', leftIndex + 1);
        rightIndex = input.indexOf(')', rightIndex + 1);

    }
    console.log(result.join(', '));
}