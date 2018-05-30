function solution(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{3})-([0-9]{4})\b/g;
    for (let i = 0; i < input.length; i++) {
        let match = regex.exec(input[i]);
        while (match !== null) {
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
            match = regex.exec(input[i]);
        }
    }
}