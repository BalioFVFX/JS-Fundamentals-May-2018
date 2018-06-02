function solution(input) {
    let map = new Map();
    input = input.join(' ').toLowerCase().split(/\W+/g).filter(w => w !== '');
    for (let i = 0; i < input.length; i++) {
        if (!map.has(input[i])) {
            map.set(input[i], 0);
        }
        map.set(input[i], map.get(input[i]) + 1)
    }
    Array.from(map).sort().forEach(value => {
        console.log(`'${value[0]}' -> ${value[1]} times`);
    });
}
solution(["Far too slow, you're far too slow."]);