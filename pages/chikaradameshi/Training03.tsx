const Training03 = () => {
	const getFizzBuzzString = (i: number): string => {
		if (i % 3 === 0 && i % 5 === 0) {
			return "FizzBuzz";
		} else if (i % 3 === 0) {
			return "Fizz";
		} else if (i % 5 === 0) {
			return "Buzz";
		} else {
			return String(i);
		}
	};

	const sequence = (start: number, end: number): number[] => {
		let arr = [];
		for (let i = start; i <= end; i++) {
			arr.push(i);
		}
		return arr;
	};

	for (const i of sequence(1, 100)) {
		const message = getFizzBuzzString(i);
		console.log(message);
	}

	function map<T, K>(array: T[], callback: (param: T) => K): K[] {
		const result: K[] = [];
		for (const elm of array) {
			result.push(callback(elm));
		}
		return result;
	}

	const data = [1, 1, 2, 3, 5, 8, 13];
	const result = map(data, (x) => x * 100);
	console.log(result);

	const data01 = [1, -3, -2, 8, 0, -1];
	const result01: boolean[] = map(data01, (x) => x >= 0);
	console.log(result01);

	return <div>Training03</div>;
};

export default Training03;
