function solution(input) {
    let result = '<table>\n  <tr>';
    let arr = JSON.parse(input);
    let keys = Object.keys(arr[0]);
    for (let i = 0; i < keys.length; i++) {
        result += `<th>${keys[i]}</th>`
    }
    result += '</tr>\n';

    for (const object of arr) {
        result += '  <tr>'
        Object.values(object).forEach(value => {
            result += `<td>${escapeHTML(value.toString())}</td>`
        });
        result += '</tr>\n';
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