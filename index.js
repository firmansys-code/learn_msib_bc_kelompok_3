// tes index.js
// perubahan dari github secara langsung

// Pembuatan variabel
// Membuat variabel dengan let
let nama = "Firman Hendrawan";

// Membuat variabel dengan const
const umur = "22";

// Menampilkan nilai variabel nama dan umur
console.log(nama);
console.log(umur);

// Pembuatan konstanta
// Membuat konstanta (nilainya tidak dapat diubah)
const PI = 3.14;

// Menampilkan nilai konstanta PI
console.log(PI);

// Pembuatan kondisi if else
// Program untuk menentukan apakah suat angka bernilai ganjil atau genap
let angka = 7;

if (angka % 2 === 0) {
    console.log("Angka ini genap.");
} else {
    console.log("Angka ini ganjil.")
}

// Progam mengecek apakah nilai variabel 'usia' lebih besar dari 17
let usia = 18;

if (usia > 17) {
    console.log("Usia anda lebih dari 17.");
} else {
    console.log("Usia anda kurang dari atau sama dengan 17.")
}

// Pembuatan switch case
// Menentukan tingkat pendidikan
let tingkatPendidikan = "PT";

switch (tingkatPendidikan) {
    case "SD":
        console.log("Sekolah Dasar");
        break;
    case "SMP":
        console.log("Sekolah Menengah Pertama");
        break;
    case "SMA":
        console.log("Sekolah Mengenah Atas");
        break;
    case "SMK":
        console.log("Sekolah Mengenah Kejuruan");
        break;
    case "PT":
        console.log("Perguruan Tinggi");
        break;
    default:
        console.log("Tingkat pendidikan tidak valid");
}

// Menentukan nama  hari
let hari = 6;

switch (hari) {
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
    case 6:
        console.log("Sabtu");
        break;
    case 7:
        console.log("Minggu");
    default:
        console.log("Hari tidak valid");
}