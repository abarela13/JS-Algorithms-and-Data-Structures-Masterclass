// Iterative Version
function factorialIV(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

// Recursive Version
function factorialRV(num) {
    if (num === 1) return 1;
    return num * factorialRV(num - 1);
}