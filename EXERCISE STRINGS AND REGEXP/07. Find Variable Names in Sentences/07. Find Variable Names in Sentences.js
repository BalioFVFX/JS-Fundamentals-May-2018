function solutoin(input) {
    let regex = /(?<=_)([a-zA-Z\d]+)/g;
    let match = input.match(regex);
    if (match !== null) {
        return match.join(',');
    }
    return match;
}