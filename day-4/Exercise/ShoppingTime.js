function shoppingTime(memberId, money) {
    if (memberId === "" || memberId === undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    }

    var result = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0,
    };

    var barang = ["Sepatu Stacattu", "Baju Zoro", "Baju H&N", "Sweater Uniklooh", "Casing Handphone"];
    var harga = [1500000, 500000, 250000, 175000, 50000]
    var beli = [];
    // var SepatuStacattu = 1500000;
    // var bajuZoro = 500000;
    // var bajuHandN = 250000;
    // var sweaterUniklooh = 175000;
    // var casingHP = 50000;
    var TotalHarga = 0;
    for (let i = 0; i < barang.length; i++) {
        if (money >= harga[i]) {
            TotalHarga += harga[i];
            beli.push(barang[i]);
        }
    }
    // console.log(barang);
    // console.log(TotalHarga);
    result.listPurchased = beli;
    result.changeMoney = money - TotalHarga;

    return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja