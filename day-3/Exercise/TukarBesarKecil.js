function tukarBesarKecil(kalimat) {
    var temp = [];

    for (let i = 0; i < kalimat.length; i++) {
        var kecil = kalimat[i].toLowerCase();
        var besar = kalimat[i].toUpperCase();
        if (kalimat[i] === kecil) {
            temp.push(kalimat[i].toUpperCase());
        } else if (kalimat[i] === besar) {
            temp.push(kalimat[i].toLowerCase());
        }
    }

    return temp.join("");
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"