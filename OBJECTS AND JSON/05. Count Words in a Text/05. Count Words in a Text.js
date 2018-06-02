function solution(input) {
    let words = {};
    input = input.join(' ').split(/\W+/g).filter(w => w !== '');
    for (let i = 0; i < input.length; i++) {
        if (!words.hasOwnProperty(input[i])) {
            words[input[i]] = 0;
        }
        words[input[i]]++;
    }
    words = JSON.stringify(words);
    console.log(words);
}