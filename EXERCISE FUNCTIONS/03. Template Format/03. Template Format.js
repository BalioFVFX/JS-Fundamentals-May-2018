function solution(input) {
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n';

    for (let i = 0; i < input.length; i += 2) {
        format(input[i], input[i + 1]);
    }

    function format(question, answer) {
        html += '  <question>\n';
        html += `    ${question}\n`
        html += '  </question>\n';
        html += '  <answer>\n';
        html += `    ${answer}\n`
        html += '  </answer>\n';
    }

    html += '</quiz>';
    console.log(html);
}