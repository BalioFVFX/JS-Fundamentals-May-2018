function solution(input) {
    let result = '<table>\n';
    let arr = JSON.parse(input);
    result += `  <tr><th>name</th><th>score</th></tr>\n`;
    for (let i = 0; i < arr.length; i++) {
        result += `  <tr><td>${escapeHTML(arr[i]['name'].toString())}</td><td>${escapeHTML(arr[i]['score'].toString())}</td></tr>\n`
    }
    result += '</table>';

    function escapeHTML(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\"/g, '&quot;')
            .replace(/\'/g, '&#39;');
    }

    return result;
}

solution('[{"name":"<div>a && '
'</div>","score":111},{"name":"Jichka Jochkova","score":-50}]'
)