function solution(numbers){
    let dist1 = (numbers[0] / 3.6) * numbers[2];
    let dist2 = (numbers[1] / 3.6) * numbers[2];
    let delta = Math.abs(dist1 - dist2);
    console.log(delta);
}