function solution(username, email, phoneNumber, text) {
    let usernameRegex = /<![a-zA-Z]+!>/g;
    let emailRegex = /<@[a-zA-Z]+@>/g;
    let phoneNumberRegex = /<\+[a-zA-Z]+\+>/g;

    for (let i = 0; i < text.length; i++) {
        console.log(text[i] = text[i].replace(usernameRegex, username).replace(emailRegex, email).replace(phoneNumberRegex, phoneNumber));
    }
}