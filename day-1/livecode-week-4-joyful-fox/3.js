/**
 * =============
 * Mencari Jarak
 * =============
//  * 
//  * [Description]
//  * Diberikan sebuah array 2-dimensi yang berisikan 2 asterisk (*) dan sisanya adalah spasi (' ')
//  * 
//  * [Instruction]
//  * Buatlah sebuah fungsi untuk menentukan jarak dari kedua asterisk tersebut.
//  * 
//  * [Example]
//  * [
 *   [' ',' ','*',' '],
 *   [' ',' ',' ',' '],
 *   [' ',' ',' ',' '],
 *   ['*',' ',' ',' ']
 * ]
 * 
 * step by step solving :
 * [
 *   [' ', ' ', '0', ' '],
 *   [' ', ' ', '1', ' '],
 *   [' ', ' ', '2', ' '],
 *   ['5', '4', '3', ' ']
 * ]
 * jika kita perhatikan urutan angka - angka diatas, maka jarak antara
 * kedua x adalah 5. Dimana posisi * tujuan dihitung sebagai 1 langkah.
 * 
 * maka output : 5
 * 
 * [Rules]
 * 1. `Dilarang menggunakan built-in function apapun` kecuali push.
 */

function findDelta(arr) {
  var jarakI = [];
  var jarakJ = [];


  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "*") {
        jarakI.push(i);
        jarakJ.push(j);
      }
    }
  }

  if (jarakI.length === 1 || jarakJ.length === 1) {
    return "Jarak Tidak ditemukan";
  }

  var cordsI = Math.abs(jarakI[1] - jarakI[0]);
  var cordsJ = Math.abs(jarakJ[1] - jarakJ[0]);
  var distance = cordsI + cordsJ;

  return distance;
}

var arr1 = [
  [' ', ' ', ' ', ' ', ' '],
  [' ', '*', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
]
console.log(findDelta(arr1)) // 3

var arr2 = [
  [' ', ' ', ' ', ' ', '*'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', '*', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
]
console.log(findDelta(arr2)) // 5

var arr3 = [
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
]
console.log(findDelta(arr3)) // Jarak tidak ditemukan