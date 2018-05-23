function solution(n){

    let degrees = n * 0.90 % 360;

    if(degrees < 0){
        degrees += 360;
    }

    return degrees;
}