function solution(input) {
    let objects = {};
    for (let i = 0; i < input.length; i++) {
        let currentObject = input[i].split(' : ');
        let currentObjectName = currentObject[0];
        let currentObjectPrice = Number(currentObject[1]);
        objects[currentObjectName] = currentObjectPrice;
    }
    let sortedKeys = Object.keys(objects).sort();

    let currentProductGroup = '';
    for (const product of sortedKeys) {
        if (currentProductGroup !== product[0].toUpperCase()) {
            console.log(product[0]);
            currentProductGroup = product[0].toUpperCase();
        }
        console.log(`  ${product}: ${objects[product]}`);
    }
}