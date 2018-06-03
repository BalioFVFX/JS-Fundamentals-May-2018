function solution(input) {
    let set = new Set();

    input = input.join(' ').toLowerCase().split(/\W+/g).filter(w => w !== '');

    for (let i = 0; i < input.length; i++) {
        set.add(input[i]);
    }
    console.log(Array.from(set).join(', '));
}

solution(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. \n' +
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. \n' +
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. \n' +
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. \n' +
'Morbi in ipsum varius, pharetra diam vel, mattis arcu. \n' +
'Integer ac turpis commodo, varius nulla sed, elementum lectus. \n' +
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);