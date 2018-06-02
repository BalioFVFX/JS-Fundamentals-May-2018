function solution(input) {
    let arr = [];
    for (let i = 1; i < input.length; i++) {
        let object = {};
        let data = input[i].split(/\|/).filter(w => w !== '').map(w => w.trim());
        object['Town'] = data[0];
        object['Latitude'] = Number(data[1]);
        object['Longitude'] = Number(data[2]);
        arr.push(object);
    }
    return JSON.stringify(arr);
}

console.log(solution(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));