function ubahHuruf(kata) {
    var alphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z'
    ];

    var string = [];
    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (kata[i] === alphabet[j]) {
                string.push(alphabet[j + 1])
            } else if (kata[i] === alphabet[25]) { // Jika huruf nya Z 
                string.push(alphabet[j - 24]);
            }
        }
    }

    return string.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu