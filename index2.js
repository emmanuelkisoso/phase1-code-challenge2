// a function that will add the missing numbers into the arrays
function numbers() {
    // the first sub-function for the first instance
    function instance1() {
        let numericals=[4,7];
        // the splice method will add number 5 and 6 to the first index of the declared numericals array
        numericals.splice(1,0,5,6);
        // the output of the first instance
        return numericals;
    }
    // the second sub-function for the second instance
    function instance2() {
        let numericals=[-4,7];
        // the splice method will add numbers from -3 to 6 to the first index of the declared numericals array
        numericals.splice(1,0,-3,-2,-1,0,1,2,3,4,5,6);
        // the output of the second instance
        return numericals;
    }
    // return an object containing the functions
    return {instance1,instance2};
}
// destucture the returned object
const{instance1,instance2}=numbers();

console.log(instance1());
console.log(instance2());
