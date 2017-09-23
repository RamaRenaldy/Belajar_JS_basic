//Javascript


//Output dalam Javascript
//document.write("") = untuk print biasa
//console.log("") = untuk debug

//document.write("Hello Javascript")
// console.log("hello")
//
// //Deklarasi Variabel Javascript
// var angka = 100 //type data integer
// var kata = 'hahaha' //type data string
// var bool = true // type data boolean
//
// //<br> untuk memberi enter
// angka=angka+'1'   //Karena ditambah string maka integer berubah menjadi string
//                   //Tipe data string sudah tidak bisa dioperasikan
// document.write('<br>angka : '+angka)
// document.write('<br>Kata : '+kata)
// document.write('<br>boolean : '+bool)

// ///getElementBy untuk mengambil element
// document.getElementById('tes').innerHTML = "ini paragraf"
//
// var text1 = document.getElementById('text1').innerText
// var text2 = document.getElementById('text2').innerText
//
// //parseInt untuk mengubah string menjadi integer kecuali terdapat huruf didalamnya
// var total = parseInt(text1)+parseInt(text2)
// document.getElementById('gabung').innerHTML = text1 + ' + ' + text2 + ' = '+ total

// //Kondisi
// var angka1 = 100
// var angka2 = 90
//
// console.log('Apakah '+angka1+' < '+angka2+' ???');
// if(angka1 < angka2){
//   console.log('benar');
//   if (angka1%2==0) {
//     console.log('Angka '+angka1+' adalah angka genap');
//   }
//   else {
//     console.log('Angka '+angka1+' adalah angka ganjil');
//   }
//
// }
// else {
//   console.log('salah');
//   if (angka2%2==0) {
//     console.log('Angka '+angka2+' adalah angka genap');
//   }
//   else {
//     console.log('Angka '+angka2+' adalah angka ganjil');
//   }
//
// }

// //Looping
// var i=0
//
// // while (i<5) {
// //   console.log(i);
// //   i++
// // }
//
// for (i; ; i++){
//   if (i==5) {
//     continue
//   }
//   else {
//     console.log('Number'+i);
//   }
//   if(i==10){
//     break
//   }
// }

//Array

//kalau dibahasa C satu variabel array hanya bisa satu tipe data, kalau di Javascript satu variabel bisa banyak tipe data
var arr=['Ren',14,'Januari']

//Print array cara 1
// console.log(arr);

//print array cara 2
//.length digunakan untuk mencari panjang suatu array
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// var i=0
// while (i<arr.length) {
//   console.log(arr[i]);
//   i++
// }

// //FUNCTION
// //Fungsi
function tambah(a,b) {
  return a+b;
}

function cetak() {
  //console.log('Ini Kata');
  return 'ini Kata'
}
//
// // console.log(tambah(10,11));
// // cetak()
//
// // if (tambah(12,2)==14) {
// //   cetak()
// // }
// // else {
// //   console.log('Error');
// // }

//Tambahan
//Dalam Javascript suatu variabel bisa dimasukkan Fungsi

// var x=1,y=2
// var isAku = function() {
//   if (cetak()=='ini Kata') {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// //Dalam JS boolean bisa di edit
// //NamaFungsi()?'true':'false'
// console.log(isAku()?'Ini benar':'Ini salah');

//Input
var Input = prompt()
var Input2 = prompt()

console.log(Input+' '+Input2A);
