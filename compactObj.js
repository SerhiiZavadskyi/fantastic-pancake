function compactObject(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;

    if (Array.isArray(obj)) {
        return obj.reduce((acc, iter) => {
            if (!iter) return acc;
            acc.push(compactObject(iter));
            return acc;
        }, []);
    }

    return Object.entries(obj).reduce((acc, [key, val]) => {
        if (val) acc[key] = compactObject(val);
        return acc;
    }, {});
}

console.log(compactObject([null, 0, 5, [0], [false, 16]]))
