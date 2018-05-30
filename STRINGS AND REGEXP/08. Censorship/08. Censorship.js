function solution(text, words) {
    for (let i = 0; i < words.length; i++) {
        let index = text.indexOf(words[i]);
        while (index !== -1) {
            text = text.replace(words[i], '-'.repeat(words[i].length));
            index = text.indexOf(words[i], index + 1);
        }
    }
    return text;
}