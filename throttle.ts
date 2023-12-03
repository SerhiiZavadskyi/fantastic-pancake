type Fn = (...args: number[]) => void;

function throttle(fn: Fn, t: number) {
	let isWaiting = false;
	return (...args: number[]) => {
		if (!isWaiting) {
			fn(...args);
			isWaiting = true;

			setTimeout(() => {
				isWaiting = false;
			}, t);
		}
	};
}

const minus2 = (v: number) => {
	console.log(v - 2);
};
const minus = throttle(minus2, 2000);
minus(10);

setTimeout(() => {
	minus(12); // canceled
}, 1000);

setTimeout(() => {
	minus(16); // canceled
}, 1500);

setTimeout(() => {
	minus(312); // 310 after 6s
}, 2100);
