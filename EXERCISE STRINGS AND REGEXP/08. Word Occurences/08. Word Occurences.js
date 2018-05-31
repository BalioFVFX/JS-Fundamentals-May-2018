function solution(sentence, word) {
    word = word.toUpperCase();
    word = word + "\\b";
    let regex = new RegExp(word, 'gi');
    sentence = sentence.toUpperCase();
    let match = sentence.match(regex);
    if (match !== null) {
        return match.length;
    }
    else {
        return 0;
    }
}

console.log(solution('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
    'there'));