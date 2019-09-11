/*
=============
Reverse Array
=============

Function reverseAll() mengambil input berupa sebuah array, dan mengembalikan kebalikan dari isi array tersebut
beserta kebalikan dari angka-angka di dalamnya.

CONTOH:

input : [123, 456]

PROSES:
1. 456 dibalik jadi 654
2. 123 dibalik jadi 321
3. 654 akan berada di index 0 array dan 321 akan berada di index 1 array

output: [654, 321]

catatan: output merupakan array of numbers, bukan array of string

DILARANG MENGGUNAKAN:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

function reverseAll(arr) {
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    var balikkata = arr[i].toString();
    var str = ""
    for (let j = 0; j < balikkata.length; j++) {
      str = balikkata[j] + str;
    }
    result.push(str);
  }
  var resultReverse = [];

  for (var i = result.length - 1; i >= 0; i--) {
    var number = Number(result[i]);
    resultReverse.push(number);
  }

  return resultReverse;
}

console.log(reverseAll([123, 521, 456])) //[654,125,321]
console.log(reverseAll([897])) //[798]
console.log(reverseAll([])) //[]