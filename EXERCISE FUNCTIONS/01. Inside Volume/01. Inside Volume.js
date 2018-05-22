function solution(input) {
    for (let i = 0; i < input.length; i += 3) {
        if (isInside(input[i], input[i + 1], input[i + 2])) {
            console.log('inside')
        }
        else {
            console.log('outside');
        }
    }

    function isInside(x, y, z) {
        let defaultX1 = 10;
        let defaultX2 = 50;
        let defaultY1 = 20;
        let defaultY2 = 80;
        let defaultZ1 = 15;
        let defaultZ2 = 50;

        if (x >= defaultX1 && x <= defaultX2 &&
            y >= defaultY1 && y <= defaultY2 &&
            z >= defaultZ1 && z <= defaultZ2) {
            return true;
        }

        return false;
    }
}