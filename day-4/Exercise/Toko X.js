function countProfit(shoppers) {
    if (shoppers.length < 1) {
        return [];
    }

    var object = [{
        product: "Sepatu Stacattu",
        harga: 1500000,
        stock: 10
    }, {
        product: "Baju Zoro",
        harga: 500000,
        stock: 2
    }, {
        product: "Sweater Uniklooh",
        harga: 175000,
        stock: 1
    }];

    var result = [{
        product: "Sepatu Stacattu",
        shoppers: [],
        leftOver: 10,
        totalProfit: 0
    }, {
        product: "Baju Zoro",
        shoppers: [],
        leftOver: 2,
        totalProfit: 0
    }, {
        product: "Sweater Uniklooh",
        shoppers: [],
        leftOver: 1,
        totalProfit: 0
    }];
    for (let i = 0; i < shoppers.length; i++) {
        // var Temp = {};
        for (let j = 0; j < object.length; j++) {
            if (shoppers[i].product === object[j].product && object[j].stock >= shoppers[i].amount) {
                result[j].shoppers.push(shoppers[i].name);
                object[j].stock -= shoppers[i].amount;
                result[j].totalProfit += object[j].harga * shoppers[i].amount;
                result[j].leftOver = object[j].stock;



            }
        }
        // result.push(Temp);

    }

    return result;
}

// // TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));

console.log("==========================================");
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
console.log("================================================")
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
console.log("================================================")
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]