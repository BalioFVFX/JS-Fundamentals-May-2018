function solution(n){
    let height = n % 2 === 0 ? n - 1 : n;
    let numOfCharacters = n - 2;
    let middleElements = (height - 3) / 2;

    if(n === 2){
        console.log('+++');
    }
    else{
        console.log('+' + '-'.repeat(numOfCharacters) + '+' + '-'.repeat(numOfCharacters) + '+');

        for (let i = 0; i < middleElements; i++) {
            console.log('|' + ' '.repeat(numOfCharacters) + '|' + ' '.repeat(numOfCharacters) + '|');
        }

        console.log('+' + '-'.repeat(numOfCharacters) + '+' + '-'.repeat(numOfCharacters) + '+');

        for (let i = 0; i < middleElements; i++) {
            console.log('|' + ' '.repeat(numOfCharacters) + '|' + ' '.repeat(numOfCharacters) + '|');
        }

        console.log('+' + '-'.repeat(numOfCharacters) + '+' + '-'.repeat(numOfCharacters) + '+');
    }
}