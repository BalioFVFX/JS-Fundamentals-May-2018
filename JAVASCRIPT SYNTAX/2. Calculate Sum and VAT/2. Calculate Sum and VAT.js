function sumAndVAT(nums){
    let sum  = 0;

    for(let num of nums){
        sum += num;
    }

    console.log("sum = " + sum);
    let VAT = sum * 0.20;
    console.log("VAT = " + VAT);
    console.log("total = " + (sum + VAT));
}