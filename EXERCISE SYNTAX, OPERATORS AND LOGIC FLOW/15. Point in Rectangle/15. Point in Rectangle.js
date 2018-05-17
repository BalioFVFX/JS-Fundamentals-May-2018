function solution(input){
    let pointX = input[0];
    let pointY = input[1];

    let rectXMin = input[2];
    let rectXMax = input[3];
    let rectYMin = input[4];
    let rectYMax = input[5];

    if(pointX >= rectXMin && pointX <= rectXMax && pointY >= rectYMin && pointY <= rectYMax){
        console.log('inside');
    }
    else{
        console.log('outside');
    }
}