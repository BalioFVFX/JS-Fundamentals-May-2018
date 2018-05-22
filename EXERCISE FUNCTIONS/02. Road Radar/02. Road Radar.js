function solution(input) {

    let speed = input[0] - getSpeedLimit(input[1]);

    if (speed > 0 && speed < 21) {
        console.log('speeding');
    }
    else if (speed > 20 && speed < 41) {
        console.log('excessive speeding')
    }
    else if (speed > 40) {
        console.log('reckless driving');
    }

    function getSpeedLimit(place) {
        switch (place) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
            default:
                return 0;
        }
    }
}