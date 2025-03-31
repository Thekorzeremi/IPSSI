function sumArray(arr) {
    if(!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error("Invalid element in array");
        }
        totalSum += arr[i];
    }
    return totalSum;
}

export { sumArray };