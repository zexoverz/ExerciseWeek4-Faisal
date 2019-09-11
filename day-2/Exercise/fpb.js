function fpb(angka1, angka2) {
    var pembagi1 = [];
    var pembagi2 = [];
    var fpb = [];
    for (let i = 1; i < angka1; i++) {
        if (angka1 % i === 0) {
            pembagi1.push(i);
        }
    }

    for (let j = 1; j < angka2; j++) {
        if (angka2 % j === 0) {
            pembagi2.push(j);
        }
    }
    // console.log(pembagi1);
    // console.log(pembagi2);
    // console.log("====================")

    function Max(array1, array2) {
        // Ambil data result dri fpb
        var result = [];

        var a = array1.slice(0);
        var b = array2.slice(0);

        var aLast = a.length - 1;
        var bLast = b.length - 1;
        while (aLast >= 0 && bLast >= 0) {
            if (a[aLast] > b[bLast]) {
                a.pop();
                aLast--;
                // console.log(a);
            } else if (a[aLast] < b[bLast]) {
                b.pop();
                bLast--;
                // console.log(b);
            } else /*  Jika dia sama */ {
                result.push(a.pop());
                b.pop();
                aLast--;
                bLast--;
            }
            // console.log("==================");
            // console.log(result);

        }
        return result[0];
    }

    if (pembagi1.length > pembagi2.length) {
        fpb = Max(pembagi1, pembagi2);
    } else {
        fpb = Max(pembagi1, pembagi2);
    }

    return fpb;

}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1