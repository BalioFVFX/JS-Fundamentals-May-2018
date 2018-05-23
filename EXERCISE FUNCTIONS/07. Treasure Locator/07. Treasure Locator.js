function solution(input) {
    let tokelau = [8, 0, 9, 1];
    let tuvalu = [1, 1, 3, 3];
    let samoa = [5, 3, 7, 6];
    let tonga = [0, 6, 2, 8];
    let cook = [4, 7, 9, 8];

    for (let i = 0; i < input.length; i += 2) {
        isInside(input[i], input[i + 1]);
    }

    function isInside(x, y) {
        if (x >= tokelau[0] && y >= tokelau[1] && x <= tokelau[2] && y <= tokelau[3]) {
            console.log('Tokelau');
        }
        else if (x >= tuvalu[0] && y >= tuvalu[1] && x <= tuvalu[2] && y <= tuvalu[3]) {
            console.log('Tuvalu');
        }
        else if (x >= samoa[0] && y >= samoa[1] && x <= samoa[2] && y <= samoa[3]) {
            console.log('Samoa');
        }
        else if (x >= tonga[0] && y >= tonga[1] && x <= tonga[2] && y <= tonga[3]) {
            console.log('Tonga');
        }
        else if (x >= cook[0] && y >= cook[1] && x <= cook[2] && y <= cook[3]) {
            console.log('Cook');
        }
        else {
            console.log('On the bottom of the ocean');
        }
    }
}