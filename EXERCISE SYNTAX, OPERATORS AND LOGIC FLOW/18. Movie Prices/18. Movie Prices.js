function solution(input){
    if(input[0].toUpperCase() === "THE GODFATHER"){
        switch(input[1].toUpperCase()){
            case "MONDAY":
                console.log(12);
                break;
            case "TUESDAY":
                console.log(10);
                break;
            case "WEDNESDAY":
            case "FRIDAY":
                console.log(15);
                break;
            case "THURSDAY":
                console.log(12.50);
                break;
            case "SATURDAY":
                console.log(25);
                break;
            case "SUNDAY":
                console.log(30);
                break;
            default:
                console.log('error');
                break;
        }
    }
    else if(input[0].toUpperCase() === "SCHINDLER'S LIST"){
        switch(input[1].toUpperCase()){
            case "MONDAY":
            case "TUESDAY":
            case "WEDNESDAY":
            case "THURSDAY":
            case "FRIDAY":
                console.log(8.50);
                break;
            case "SATURDAY":
            case "SUNDAY":
                console.log(15);
                break;
            default:
                console.log('error');
                break;
        }
    }
    else if(input[0].toUpperCase() === "CASABLANCA"){
        switch(input[1].toUpperCase()){
            case "MONDAY":
            case "TUESDAY":
            case "WEDNESDAY":
            case "THURSDAY":
            case "FRIDAY":
                console.log(8);
                break;
            case "SATURDAY":
            case "SUNDAY":
                console.log(10);
                break;
            default:
                console.log('error');
                break;
        }
    }
    else if(input[0].toUpperCase() === "THE WIZARD OF OZ"){
        switch(input[1].toUpperCase()){
            case "MONDAY":
            case "TUESDAY":
            case "WEDNESDAY":
            case "THURSDAY":
            case "FRIDAY":
                console.log(10);
                break;
            case "SATURDAY":
            case "SUNDAY":
                console.log(15);
                break;
            default:
                console.log('error');
                break;
        }
    }
}