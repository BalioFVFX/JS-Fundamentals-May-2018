function solution(input) {
    let heroes = [];
    for (let i = 0; i < input.length; i++) {

        let currentHero = input[i].split(' / ');
        let name = currentHero[0];
        let level = Number(currentHero[1]);
        let items = [];
        if (currentHero.length > 2) {
            items = currentHero[2].split(', ');
        }
        heroes.push({name: name, level: level, items: items});
    }
    heroes = JSON.stringify(heroes);
    return heroes;
}