function solution(input) {
    let gladiators = {};
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes(' -> ')) {
            let currentInput = input[i].split(' -> ');

            let currentName = currentInput[0];
            let currentTechnique = currentInput[1];
            let currentSkill = Number(currentInput[2]);

            if (!gladiators.hasOwnProperty(currentName)) {
                let objectTechnique = {};
                objectTechnique[currentTechnique] = currentSkill;
                gladiators[currentName] = objectTechnique;
                gladiators[currentName]['TotalSkill'] = currentSkill;
            } else {

                if (!gladiators[currentName][currentTechnique]) {
                    gladiators[currentName][currentTechnique] = currentSkill;
                    gladiators[currentName]['TotalSkill'] += currentSkill;
                }
                else {
                    if (gladiators[currentName][currentTechnique] < currentSkill) {
                        gladiators[currentName][currentTechnique] = currentSkill;
                        gladiators[currentName]['TotalSkill'] -= gladiators[currentName]['TotalSkill'];
                        gladiators[currentName]['TotalSkill'] += currentSkill;
                    }
                }
            }
        }
        else if (input[i].includes(' vs ')) {
            let currentInput = input[i].split(' vs ');
            if (currentInput[0] === 'Ave' && currentInput[1] === 'Cesar') {
                break;
            }
            let firstGladiator = currentInput[0];
            let secondGladiator = currentInput[1];

            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                let firstGladiatorItems = Array.from(Object.keys(gladiators[firstGladiator]).filter(t => t !== 'TotalSkill'));

                for (let j = 0; j < firstGladiatorItems.length; j++) {
                    if (gladiators[secondGladiator].hasOwnProperty(firstGladiatorItems[j])) {
                        let sameItem = firstGladiatorItems[j];
                        if (gladiators[firstGladiator][sameItem] > gladiators[secondGladiator][sameItem]) {
                            delete gladiators[secondGladiator];
                            break;
                        }
                        else {
                            delete gladiators[firstGladiator];
                            break;
                        }
                    }

                }
            }
        }

    }
    let sortedKeys = Array.from(Object.keys(gladiators)).sort(function (a, b) {

        if (gladiators[b]['TotalSkill'] > gladiators[a]['TotalSkill']) {
            return 1;
        }
        if (gladiators[a]['TotalSkill'] > gladiators[b]['TotalSkill']) {
            return -1;
        }

        return a.localeCompare(b);

    });


    for (let gladiator of sortedKeys) {
        console.log(`${gladiator}: ${gladiators[gladiator]['TotalSkill']} skill`);
        let sortedSkills = Array.from(Object.keys(gladiators[gladiator]).filter(t => t !== 'TotalSkill').sort(function (a, b) {
            if (gladiators[gladiator][b] > gladiators[gladiator][a]) {
                return 1;
            }
            if (gladiators[gladiator][a] > gladiators[gladiator][b]) {
                return -1;
            }

            return a.localeCompare(b);
        }));

        for (let skill of sortedSkills) {
            console.log(`- ${skill} <!> ${gladiators[gladiator][skill]}`);
        }
    }
}