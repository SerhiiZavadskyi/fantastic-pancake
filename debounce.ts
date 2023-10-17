type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeout: any

    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn(...args), t)
    }
};

const log = debounce(console.log, 1000);
log(12); // cancelled
log(12); // cancelled
log(312); // Logged at t=100ms
