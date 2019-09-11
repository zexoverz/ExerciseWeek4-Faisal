function cariModus(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });

    var modus = 0;
    var angkaTerbanyak = 0;
    var lastArr = arr.length - 1;
    console.log(arr);


    if (arr[0] === arr[lastArr]) {
        return -1;
    }

    for (let i = 0; i < arr.length; i++) {
        var frekuensi = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                frekuensi++
                if (frekuensi > angkaTerbanyak) {
                    angkaTerbanyak = frekuensi;
                    modus = i;
                }
            }
        }
    }

    if (angkaTerbanyak < 1) {
        return -1;
    }




    return arr[modus];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1