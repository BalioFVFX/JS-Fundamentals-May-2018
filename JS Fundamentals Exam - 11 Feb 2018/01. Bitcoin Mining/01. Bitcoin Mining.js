function solution(input){
    let priceForGramOfBitcoin = 11949.16;
    let priceForGramOfGold = 67.51;

    let balance = 0;
    let firstPurchaseDay = 0;
    let bitcoins = 0;
    let dayCounter = 0;

    for (let i = 0; i < input.length; i++) {
        dayCounter++;

        if(dayCounter === 3){
            let stolenGold = input[i] * 0.30;
            input[i] -= stolenGold;
            dayCounter = 0;
        }

        let minedGold = Number(input[i]) * priceForGramOfGold;

        balance += minedGold;

        if(balance >= priceForGramOfBitcoin){

            while(balance >= priceForGramOfBitcoin){
                balance -= priceForGramOfBitcoin;
                bitcoins++;
            }

            if(firstPurchaseDay === 0){
                firstPurchaseDay = i + 1;
            }

        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if(firstPurchaseDay !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstPurchaseDay}`);
    }
    console.log(`Left money: ${balance.toFixed(2)} lv.`);
}

solution(['3124.15','504.212', '2511.124']);