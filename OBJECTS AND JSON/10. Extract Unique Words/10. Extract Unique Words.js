function solution(input) {
    let set = new Set();

    input = input.join(' ').toLowerCase().split(/\W+/g).filter(w => w !== '');

    for (let i = 0; i < input.length; i++) {
        set.add(input[i]);
    }
    console.log(Array.from(set).join(', '));
}