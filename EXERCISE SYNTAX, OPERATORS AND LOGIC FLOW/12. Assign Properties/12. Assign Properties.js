function solution(input){
    let object = {};
    object[input[0]] = input[1];
    object[input[2]] = input[3];
    object[input[4]] = input[5];
    return object;
}

console.log(solution(['name', 'Pesho', 'age', '23', 'gender', 'male']));