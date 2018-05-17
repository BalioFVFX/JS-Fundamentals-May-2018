function solution(number){
    let feet = Math.floor(number / 12);

    let counter = 0;
    let inches = 0;
    for (let i = 1; i <= number; i++) {
        counter++;
        inches++;
        if(counter ===  12){
            inches = 0;
            counter = 0;
        }

    }
    console.log(`${feet}'-${inches}"`);
}

solution(36);