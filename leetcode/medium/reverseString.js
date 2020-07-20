var reverseString = function (s) {
    let temp = "";

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }

    return s;
};

let input = ["h", "e", "l", "l", "o"];

reverseString(input);