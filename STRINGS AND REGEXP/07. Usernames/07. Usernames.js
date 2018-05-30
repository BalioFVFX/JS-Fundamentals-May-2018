function solution(input) {
    let usernames = [];

    for (let i = 0; i < input.length; i++) {
        let email = input[i];
        let username = '';
        let index = email.indexOf('@');
        if (index !== -1) {
            username += email.substring(0, index);
            username += '.';
            while (index !== -1) {
                username += email.substring(index + 1, index + 2);
                index = email.indexOf('.', index + 1);
            }
        }
        usernames.push(username);
    }
    console.log(usernames.join(', '));
}