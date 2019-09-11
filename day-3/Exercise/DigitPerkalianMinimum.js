function digitPerkalianMinimum(angka) {
    var pembagi = [];
    var temp = [];
    var str = "";
    var result = 0;

    for (let i = 1; i <= angka; i++) {
        pembagi = angka / i;
        str = String(i) + String(pembagi);

        if (pembagi % 1 === 0) {
            temp.push(str);
            // console.log(str.length);

            if (result === 0) {
                result = str.length;
            } else {
                if (result > str.length) {
                    result = str.length;
                }
            }
        }
        // console.log(temp)

    }
    return result;

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2