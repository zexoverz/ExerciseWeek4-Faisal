function urutkanAbjad(str) {
    temp = str.split("");
    result = bubbleSort(temp).join("");

    return result;


}

function bubbleSort(arr) {
    length = arr.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP j+1 and j
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'