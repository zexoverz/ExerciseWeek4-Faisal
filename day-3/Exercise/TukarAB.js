function checkAB(num) {
    var AB = 0;
    for (let i = 0; i < num.length; i++) {
        var str = num[i];
        if (str === 'a' || str === 'b') {
            AB = i;
            break;
        }
    }

    var j = AB + 4;

    if (str === 'a' && num[j] === 'b') {
        return true;
    } else if (str === 'b' && num[j] === 'a') {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false