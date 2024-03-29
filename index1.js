let alphabets= 'The Quick Brown Fox';

function change() {
    let changedAlphabets='';
    for (let i = 0; i < alphabets.length; i++) {
        if ([1,2,5,6,7,8,11,12,13,14,17,18].includes(i)) {
            changedAlphabets += alphabets[i].toUpperCase();
        }
        else{
            changedAlphabets += alphabets[i].toLowerCase();
        }
    }
    return changedAlphabets;
}
console.log (change());