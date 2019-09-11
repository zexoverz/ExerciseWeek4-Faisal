/*
==========================
Gundala Membasmi Kejahatan
==========================
Instruksi
=========
Gundala sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar Gundala tidak dapat menangkap mereka.
Gundala memiliki 3 "nyawa", jika Gundala terkena jebakan maka "nyawa" dari gundala ini akan berkurang.

Keterangan
 - '*' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '#' adalah jalanan biasa
 - 'Begundal' adalah pelaku kejahatan

 Jika nyawa Gundala habis, pertarungan pun akan berakhir. Dan mengembalikan jumlah begundal yang 
 berhasil ditangkap sebelum Gundala gugur.

 [RULES]
  - WAJIB menggunakan PSEUDOCODE
  - DILARANG menggunakan built-in function lain
 */

/*
Pseudocode : 

START
  STORE nyawa with 3
  STORE penjahat with 0
  STORE gundala with array ['*', '*', '#', '#', 'Begundal', '#', 'Begundal', 'Begundal', '#'] // input case 1
  STORE i with 0;

  FOR i LessTHAN gundala length , INCREMENT I THEN 
    IF gundala index i EQUAL "*"
      DECREMENT nyawa
    ELSE IF gundala index i EQUAL "Begundal"
      INCREMENT penjahat
    END IF
    
    IF nyawa LessTHAN 1 
      break loop
    END IF
  END FOR

  IF nyawa HigherTHAN 0 
    Display Selamat Gundala, Kamu telah memenangkan peperangan! Kamu telah menangkap `penjahat`  begundal
  ELSE IF nyawa LessTHAN 1 AND penjahat LessTHAN 1
    Display Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal
  ELSE IF nyawa LessTHAN 1
    Display Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap  `penjahat` begundal
  END IF
END


 */

function basmiKejahatan(gundala) {
  var nyawa = 3
  var penjahat = 0;
  for (let i = 0; i < gundala.length; i++) {
    if (gundala[i] === "*") {
      nyawa--;
    } else if (gundala[i] === "Begundal") {
      penjahat++;
    }
    if (nyawa < 1) {
      break;
    }
  }
  if (nyawa > 0) {
    return "Selamat Gundala, Kamu telah memenangkan peperangan! Kamu telah menangkap " + penjahat + " begundal";
  } else if (nyawa < 1 && penjahat < 1) {
    return "Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.";
  } else if (nyawa < 1) {
    return "Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap " + penjahat + " begundal.";
  }
}

console.log(basmiKejahatan(['*', '*', '#', '#', 'Begundal', '#', 'Begundal', 'Begundal', '#']));
// Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap 3 begundal.

console.log(basmiKejahatan(['*', '*', '*', 'Begundal', '*', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap 1 begundal.

console.log(basmiKejahatan(['*', '*', '*', '*', '#', 'Begundal', '*', 'Begundal', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.