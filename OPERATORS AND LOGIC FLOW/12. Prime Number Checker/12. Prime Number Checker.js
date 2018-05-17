function solution(number){
	let isPrime = true;

		if(number > 1) {
			for (let i = 2; i < Math.sqrt(number); i++) {
				if (number % i === 0) {
					isPrime = false;
					break;
				}
			}
		}
		else{
			isPrime = false;
		}
	console.log(isPrime);
}