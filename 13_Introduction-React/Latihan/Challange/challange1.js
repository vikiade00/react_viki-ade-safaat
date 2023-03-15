function reverseAngka(num){
    const negativ = num < 0;
    const revesenum = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return negativ ? -revesenum : revesenum;
}

console.log(reverseAngka(-18))