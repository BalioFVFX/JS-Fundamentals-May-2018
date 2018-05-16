function solution(radius, height){
    let s = Math.sqrt(radius * radius + height * height);
    let volume = 1/3 * Math.PI * radius * radius * height;
    let area = Math.PI * radius * s + Math.PI * radius * radius;
    console.log('volume = ' + volume);
    console.log('area = ' + area);
}