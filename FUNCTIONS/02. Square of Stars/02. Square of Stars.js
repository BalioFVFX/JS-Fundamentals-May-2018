function solution(n){
    let output = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            output += '* ';
        }
        output = output.substr(0, output.length - 1);
        output += "\n";
    }
    return output;
}