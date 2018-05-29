function solution(input) {
    input.sort(function (a, b) {
        if (a.length - b.length === 0) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        }
        return a.length - b.length
    });

    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}