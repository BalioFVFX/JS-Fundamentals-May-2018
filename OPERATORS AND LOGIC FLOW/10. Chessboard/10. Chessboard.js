function solution(n){
    let html = "<div class=\"chessboard\">\n";
    let color = "";
    for (let i = 0; i < n; i++) {
        html += "<div>\n";
        if(i % 2 === 0){
            color = "black";
        }
        else {
            color = "white";
        }
        for (let j = 0; j < n; j++) {
            html += `   <span class="${color}"></span>\n`;
            if(color === "white"){
                color = "black";
            }
            else{
                color = "white";
            }
        }
        html += "</div>\n";
    }
    html += "</div>";
    console.log(html);
}