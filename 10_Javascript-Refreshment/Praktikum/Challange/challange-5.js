// segitiga pertama
function segitiga1(baris) {
    let result = ""
    for (let i = 1; i <= baris; i++){
        for (let j = baris; j >= i; j--){
            if (j % 2 === 0){
                result += "1 ";
            }else{
                result += "0 ";
            }
        }
        result += "\n";
    }
    return result;
}

console.log(segitiga1(4));

// segitiga ke dua
function segitiga2(baris){
    let result = ""

    for (let i = 1; i <= baris; i++){
        for ( let j = baris - 1; j >= i; j--){
            result += " "
        }

        for (let k = 1; k <= i ; k++){
            // result +=(k%2 == 0) ? "0" : "1";
            if (k % 2 === 0){
                result += "1"
            }else{
                result += "0"
            }
        }
        result += "\n"
    }
    return result;
}

console.log(segitiga2(4));