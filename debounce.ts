type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
	let timeout: any;

	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => fn(...args), t);
	};
}

// const log = debounce(console.log, 1000);
// log(12); // cancelled
// log(12); // cancelled
// log(312); // Logged at t=100ms

const debounce2 = (fn: F, t: number) => {
	let timer: any;
	return (...args: number[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
		}, t);
	};
};
const add2 = (v: number) => {
	console.log(v + 2);
};
const add = debounce(add2, 1000);
add(12); // cancelled
add(12); // cancelled
add(312); // Logged at t=100ms
