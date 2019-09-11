function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    var result = [];

    for (let i = 0; i < arrPenumpang.length; i++) {
        var obj = {
            penumpang: "",
            naikDari: "",
            tujuan: "",
            bayar: 0
        };

        obj.penumpang = arrPenumpang[i][0];
        obj.naikDari = arrPenumpang[i][1];
        obj.tujuan = arrPenumpang[i][2];

        var mulai = 0;
        var akhir = 0;
        for (let j = 0; j < rute.length; j++) {
            if (obj.naikDari === rute[j]) {
                mulai = j + 1;
            } else if (obj.tujuan === rute[j]) {
                akhir = j + 1;
            }
        }

        var jarak = akhir - mulai;
        var total = 2000 * jarak;
        obj.bayar = total;
        result.push(obj);
    }

    return result;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]