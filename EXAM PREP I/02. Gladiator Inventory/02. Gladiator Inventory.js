function solution(input) {
    let invetory = input.shift().split(' ');

    let commands = {
        'Buy': function (item) {
            if (!invetory.includes(item)) {
                invetory.push(item);
            }
        },
        'Trash': function (item) {
            let itemIndex = invetory.indexOf(item);
            if (itemIndex !== -1) {
                invetory.splice(itemIndex, 1);
            }
        },
        'Repair': function (item) {
            let itemIndex = invetory.indexOf(item);
            if (itemIndex !== -1) {
                let repairedItems = invetory.splice(itemIndex, 1);
                invetory.push(repairedItems[0]);
            }
        },
        'Upgrade': function (item) {
            item = item.split('-');
            let itemIndex = invetory.indexOf(item[0]);
            if (itemIndex !== -1) {
                let repairedItems = invetory.splice(itemIndex + 1, 0, item.join(':'));
                invetory.push(repairedItems[0]);
            }
        },
        'Fight!': function () {
            console.log(invetory.join(' '));
        }
    };

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split(' ');
        let command = currentCommand[0];
        let item = currentCommand[1];

        commands[command](item);
    }
}