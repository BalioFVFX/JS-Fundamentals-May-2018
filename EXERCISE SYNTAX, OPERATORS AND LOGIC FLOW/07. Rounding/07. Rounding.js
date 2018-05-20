function solution(input){
    if(input[1] > 15){
        input[1] = 15;
    }
    input[0] = Number(input[0].toFixed(input[1]));
    console.log(input[0]);
}