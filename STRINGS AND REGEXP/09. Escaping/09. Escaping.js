function solution(input) {
    let symbols = ['&', '<', '>', '"'];
    let encoded = ['&amp;', '&lt;', '&gt;', '&quot;'];
    let html = '<ul>\n';
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < symbols.length; j++) {
            let index = input[i].indexOf(symbols[j]);
            while (index !== -1) {
                input[i] = input[i].replace(symbols[j], encoded[j]);
                index = input[i].indexOf(symbols[j], index + 1);
            }
        }
        html += `  <li>${input[i]}</li>\n`;
    }
    html += '</ul>';
    return html;
}