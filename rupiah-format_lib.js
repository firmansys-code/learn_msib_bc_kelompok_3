// Contoh penggunaan library rupiah-format

//require library
const convertRupiah = require('rupiah-format')

//convert number
let number = 1000000
let rupiah = convertRupiah.convert(number)

console.log(rupiah)