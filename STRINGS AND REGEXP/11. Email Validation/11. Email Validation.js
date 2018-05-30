function solution(input) {
    let regex = new RegExp("\\b[a-zA-Z0-9]+@[a-z]+\\.[a-z]+\\b");
    if (regex.test(input) === true) {
        return 'Valid';
    }
    else {
        return 'Invalid';
    }
}