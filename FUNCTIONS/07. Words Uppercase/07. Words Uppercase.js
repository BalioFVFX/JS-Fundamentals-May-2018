function solution(input){
    return input.split(/\W+/).map(w => w.toUpperCase()).filter(w => w != '').join(', ');
}