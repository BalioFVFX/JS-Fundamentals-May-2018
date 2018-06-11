function solution(input) {
    let usernames = new Set();

    for (let i = 0; i < input.length; i++) {
        usernames.add(input[i]);
    }
    let arr = Array.from(usernames);
    arr.sort(function (a, b) {
        if (a.length > b.length) {
            return 1;
        }
        if (b.length > a.length) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }

    });
    arr.forEach(value => {
        console.log(value);
    });
}

solution(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);