function solution(numbers){
    let principalSum = numbers[0];
    let interestRate = numbers[1] * 0.0100;
    let compoundingPeriod = numbers[2];
    let totalTimespan = numbers[3];
    let frequency = 12 / compoundingPeriod;
    let result = principalSum * Math.pow((1 + interestRate / frequency), frequency * totalTimespan);
    console.log(result.toFixed(2));
}