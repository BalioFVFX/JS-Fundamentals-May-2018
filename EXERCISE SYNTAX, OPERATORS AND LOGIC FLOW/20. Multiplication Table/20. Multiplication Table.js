function solution(input){
    let html = "<table border=\"1\">\n";
    let counter = 0;
    let sum = 0;
    html += "<tr><th>x</th>";

    for (let i = 1; i <= input; i++) {
        html += `<th>${i}</th>`;
    }

    html += "</tr>\n";

    for (let i = 1; i <= input; i++) {

        for (let j = 1; j <= input; j++) {
            if(counter === 0){
                html += `  <tr><th>${i}</th><td>${i}</td>`;
                sum = i;
            }
            else{
                sum += i;
                html += `<td>${sum}</td>`;
            }
            counter++;

        }
            html += "</tr>\n";
            counter = 0;
            sum = 0;
    }
    html += "</table>";
    console.log(html);
}