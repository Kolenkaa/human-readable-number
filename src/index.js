module.exports = function toReadable(number) {
	let tens = [
		"twenty",
		"thirty",
		"forty",
		"fifty",
		"sixty",
		"seventy",
		"eighty",
		"ninety"
	];
	let forTenToTwenty = [
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen"
	];
	let units = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine"
	];
	let num = number.toString().split("");

	if (num.length === 3) {
		if (num[1] == 1) {
			return (`${units[num[0]]} hundred ${forTenToTwenty[num[2]]}`);
		}
		if (num[1] == 0) {
			if (num[2] > 0) {
				return (`${units[num[0]]} hundred ${units[num[2]]}`);
			}
			if (num[2] == 0) {
				return (`${units[num[0]]} hundred`);
			}
		} else {
			if (num[2] > 0) {
				return (`${units[num[0]]} hundred ${tens[num[1] - 2]} ${units[num[2]]}`);
			}
			if (num[2] == 0) {
				return (`${units[num[0]]} hundred ${tens[num[1] - 2]}`);
			}
		}
	}
	if (num.length === 2) {
		if (number < 20) {
			return (`${forTenToTwenty[num[1]]}`);
		} else {
			if (num[1] > 0) {
				return (`${tens[num[0] - 2]} ${units[num[1]]}`);
			}
			if (num[1] == 0) {
				return (`${tens[num[0] - 2]}`);
			}
		}
	}
	if (num.length === 1) {
		return (`${units[num[0]]}`);
	}
}
