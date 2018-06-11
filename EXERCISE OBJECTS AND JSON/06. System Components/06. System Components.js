function solution(input){
    let system = new Map();
    for (let i = 0; i < input.length; i++) {
        let currentSystem = input[i].split(' | ');
        let currentSystemName = currentSystem[0];
        let currentSystemComponent = currentSystem[1];
        let currentSystemSubComponent = currentSystem[2];

        if(!system.has(currentSystemName)){
            let systemData = new Map();
            let subComponentsArr = [];
            subComponentsArr.push(currentSystemSubComponent);
            systemData.set(currentSystemComponent, subComponentsArr);
            system.set(currentSystemName, systemData);
        }
        else{
            if(system.get(currentSystemName).has(currentSystemComponent)){
                let systemData = new Map();
                systemData.set(currentSystemComponent, currentSystemSubComponent);
                system.get(currentSystemName).get(currentSystemComponent).push(currentSystemSubComponent);
            }else{
                system.get(currentSystemName).set(currentSystemComponent, [currentSystemSubComponent]);
            }
        }
    }
    let systems = Array.from(system);

    // systems.sort(function (a, b){
    //
    //     // Get the subcomponents
    //     let arr1 = Array.from(a[1]);
    //     let arr2 = Array.from(b[1]);
    //     console.log(arr1[1][1]);
    //     console.log()
    //     console.log(arr2[0][1]);
    //     if(arr2[0][1].length > arr1[1][1].length){
    //         return -1;
    //     }
    //     if(arr1[1][1].length > arr2[0][1].length){
    //         return 1;
    //     }
    //     // console.log(arr1);
    //     // console.log();
    //     // console.log(arr2);
    // });

    systems.sort(function (a, b) {
        // Get the components
        let arr1 = Array.from(a[1]);
        let arr2 = Array.from(b[1]);


        // Sort by descending order
        if(arr2[0][1].length > arr1[0][1].length){
            return 1;
        }
        if(arr1[0][1].length > arr2.length){
            return -1;
        }
        // Sort by alphabetical (second criteria)

        if(arr1[0][0] > arr2[0][0]){
            return 1;
        }
        if(arr2[0][0] > arr1[0][0]){
            return -1;
        }

    });


    for (const systemElement of systems) {

        console.log(systemElement[0]);

        let testComp = Array.from(systemElement[1]);

        testComp.sort(function (a, b) {
            if(a[1].length > b[1].length){
                return -1;
            }
            if(b[1].length > a[1].length){
                return 1;
            }
        });
        let sortedMap = new Map(testComp);

        for (const component of sortedMap) {
            console.log(`|||${component[0]}`);
            for (const subComponent of component[1]) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}

solution(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);
//solution(['Test | TestC | Test', 'Test | TestC | Test2']);