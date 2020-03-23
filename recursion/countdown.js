// Iterative Version
function countDownIV(num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All done!");
}

// Recursive Version
function countDownRV(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDownRV(num);
}
countDownRV(3);