function solution(input){
    for (let i = 0; i < input.length; i++) {
        if(input[i] !== input[input.length - 1 - i]){
            return false;
        }
    }
    return true;
}