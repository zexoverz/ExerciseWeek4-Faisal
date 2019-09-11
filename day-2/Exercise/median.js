function cariMedian(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    // console.log(arr);
    // console.log("===================");
    for (let i = 0; i < arr.length; i++) {
        var medianGanjil = Math.ceil(arr.length / 2);
        var medianGenap = arr.length / 2;
        if (arr.length % 2 === 1) {
            if (i === medianGanjil) {
                return arr[i - 1];
            }
        } else if (arr.length % 2 === 0) {
            var genap = (arr[medianGenap - 1] + arr[medianGenap]) / 2;
            return genap;
        }
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7 // harusnya 6 , karna ketika di urutkan array nya menjadi [ 3, 4, 6, 7, 10 ];
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5