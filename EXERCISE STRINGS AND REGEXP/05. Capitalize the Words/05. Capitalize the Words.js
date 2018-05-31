function solution(input) {
    return input.split(' ').map(w => w.toLowerCase()).map(w => w.replace(/\w/, (w) => w[0].toUpperCase())).join(' ');
}

console.log(solution('Was that Easy? tRy thIs onE for SiZe!'));;