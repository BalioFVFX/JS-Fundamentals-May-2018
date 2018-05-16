function solution(text, letter){
    let letterCount = 0;

    for (let currentLetter of text) {
        if(currentLetter == letter){
            letterCount++;
        }
    }
    console.log(letterCount);
}