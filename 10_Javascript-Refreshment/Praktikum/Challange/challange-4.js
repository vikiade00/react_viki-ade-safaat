const prompt = require('prompt-sync')();

console.log('------------------------------------')
const platNo = prompt('Masukkan Plat Anda: ');
console.log('------------------------------------')
const tgl = prompt('Masukkan Tgl: ');
const bln = prompt('Masukkan Bulan: ');
const thn = prompt('Masukkan Tahun: ');
console.log('------------------------------------')
console.log(`Plat anda ${platNo}`)
console.log(`Tgl Hari ini ${tgl}-${bln}-${thn}`)
console.log('------------------------------------')

// contoh plat
// D 1234 ZVE

const digitPlat = platNo.slice(5,6)

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