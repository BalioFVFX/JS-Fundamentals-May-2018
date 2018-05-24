function solution(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let slicePosition = Math.max(0, i - k);
        let sumNumbers = result.slice(slicePosition, i);
        let sum = 0;
        for (let j = 0; j < sumNumbers.length; j++) {
            sum += sumNumbers[j];
        }

        result.push(sum);
    }
    return result.join(' ');
}