function solution(input) {
    let regex = /^\b([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)\b$/g;
    for (let i = 0; i < input.length; i++) {
        let match = regex.exec(input[i]);
        while (match !== null) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
            match = regex.exec(input[i]);
        }
    }
}
solution(['Isacc - 1000 - Team - Leader 1',
    'Ivan - 0200 - Employee',
    'Peter - 500 - Employee',
    ]
);