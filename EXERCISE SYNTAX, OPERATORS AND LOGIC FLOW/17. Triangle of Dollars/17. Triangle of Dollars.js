function solution(input){
    let output = "";
    for (let i = 0; i < input; i++) {
        for (let j = 0; j <= i; j++) {
            output += "$";
        }
        output += "\n";
    }
    console.log(output);
}