function solution(numbers){
    let x1 = numbers[0];
    let y1 = numbers[1];
    let z1 = numbers[2];
    let x2 = numbers[3];
    let y2 = numbers[4];
    let z2 = numbers[5];

    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2));

    console.log(distance);
}