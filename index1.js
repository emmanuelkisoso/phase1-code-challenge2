// a variable for the sentense we want to change the casing of some letters
let alphabets= 'The Quick Brown Fox';
// a function to perform the action of changing the casing
function change() {
    // declare an empty a variable with an empty string
    let changedAlphabets='';
    // a loop that iterates through the sentence and folows our conditions
    for (let i = 0; i < alphabets.length; i++) {
        // checks the following indexes in the sentence and changes them to capital letters,the spaces are treated as indexes also
        if ([1,2,5,6,7,8,11,12,13,14,17,18].includes(i)) {
            changedAlphabets += alphabets[i].toUpperCase();
        }
        // the other indexes are put to small letters
        else{
            changedAlphabets += alphabets[i].toLowerCase();
        }
    }
    // stop the execution of the function and show the output of the function
    return changedAlphabets;
}
// a log of the change function
console.log (change());