function solution(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let final = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            final += helmetPrice;
        }
        if (i % 3 === 0) {
            final += swordPrice;
        }
        if (i % 6 === 0) {
            final += shieldPrice;
        }
        if (i % 12 === 0) {
            final += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${final.toFixed(2)} aureus`);
}