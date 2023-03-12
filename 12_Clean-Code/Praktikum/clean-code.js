// import modul prompt-sync
const prompt = require('prompt-sync')();

// input data plat dan juga tgl
console.log('------------------------------------')
const platNo = prompt('Masukkan Plat Anda: ');
console.log('------------------------------------')
const tgl = prompt('Masukkan Tgl: ');
const bln = prompt('Masukkan Bulan: ');
const thn = prompt('Masukkan Tahun: ');

// Menampilkan data plat dan tanggal 
console.log('------------------------------------')
console.log(`Plat anda ${platNo}`)
console.log(`Tgl Hari ini ${tgl}-${bln}-${thn}`)
console.log('------------------------------------')

// mengambil data plat di digit ke 5
const digitPlat = platNo.slice(5,6)

// function hitung tanggal ganjil/genap 
function hitungtgl(){
    if (tgl % 2 === 0 && digitPlat % 2 == 0){
    console.log('Hari ini adalah Tgl genap kamu boleh pergi sekarang')
    
    }else if(tgl % 2 === 0 && digitPlat % 2 == 1){
    console.log('Hari ini adalah Tgl genap kamu tidak boleh pergi sekarang')
    
    }else if (tgl % 2 === 1 && digitPlat % 2 == 1){
    console.log('Hari ini adalah tgl ganjil, Kamu boleh pergi sekarang')
    
    }else if (tgl % 2 === 1 && digitPlat % 2 == 0){
    console.log('Hari ini adalah tgl ganjil, Kamu tidak boleh pergi sekarang')
    
    }else{
    console.log('Telah terjadi kesalahan mohon cek kembali')
    }
}

hitungtgl()