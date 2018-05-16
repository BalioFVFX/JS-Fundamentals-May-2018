function solution(x1, y1, x2, y2){
    pointA = {x: Number(x1), y: Number(y1)};
    pointB = {x: Number(x2), y: Number(y2)};

    let distance = Math.sqrt(Math.pow(pointB['x'] - pointA['x'], 2) + Math.pow(pointB['y'] - pointA['y'], 2));

    console.log(distance);
}