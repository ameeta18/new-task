const ps=require('prompt-sync')

const prompt=ps()
const bigInt = require("big-integer");
function smallrange(){
    const low = parseInt(prompt('Enter lower number: '));
    const high = parseInt(prompt('Enter higher number: '));
    var startTime = new Date();
    function method1(low,high){
    console.log(`The prime numbers between ${low} and ${high} are:`);
    let count=0
    for (let i = low; i <= high; i++) {
        let isprime = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isprime = 1;
                break;
            }
        }
        if (i > 1 && isprime == 0) {
            console.log(i);
            count=1
        }
    }
    if(count==0){console.log("Sorry no prime number is found!")}
}
    var endTime = new Date();
    var timeDiff = endTime - startTime;
    var seconds= timeDiff /=1000
    //var seconds = Math.round(timeDiff % 60);
    console.log(seconds)
    return {low, high , seconds, }
    }
    module.exports=smallrange