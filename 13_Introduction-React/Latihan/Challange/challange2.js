function cekKata(kata){
    const reverseKata = kata.split('').reverse().join('');
    return kata === reverseKata;
}

console.log(cekKata('kasur ini rusak'));
console.log(cekKata('ini hasilnya false'));
