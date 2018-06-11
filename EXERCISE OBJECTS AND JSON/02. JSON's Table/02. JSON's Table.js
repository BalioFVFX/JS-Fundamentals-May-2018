function solution(input) {
    let result = '<table>\n';
    for (let i = 0; i < input.length; i++) {
        let object = JSON.parse(input[i]);
        object['name'] = escapeHTML(object['name'].toString());
        object['position'] = escapeHTML(object['position'].toString());
        object['salary'] = escapeHTML(object['salary'].toString());

        result += '    <tr>\n';
        result += `        <td>${object['name']}</td>\n`;
        result += `        <td>${object['position']}</td>\n`;
        result += `        <td>${object['salary']}</td>\n`;
        result += '    <tr>\n';
    }

    result += '</table>';
    console.log(result);

    function escapeHTML(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\"/g, '&quot;')
            .replace(/\'/g, '&#39;');
    }
}

solution(['{"name":"Pesho &","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);