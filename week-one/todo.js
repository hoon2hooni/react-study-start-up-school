
//1번
export const calculator = (presentDict) => {
	/**todo */

	let answer = 0;
	let price = Object.values(presentDict);
	for (let i = 0; i < price.length; i++) {
		answer += price[i];
	}
	return (answer);
}

//2번
export const getSumDivisible = (divisor, numberList) => {
	/**todo */
	let answer = 0;
	let list = [];
	for (let i = 0; i < numberList.length; i++) {
		if (numberList[i] % divisor == 0) {
			list.push(numberList[i]);
		}
	}
	for (let i = 0; i < list.length; i++) {
		answer += list[i];
	}
	return answer;
}
