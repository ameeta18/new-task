const ps=require('prompt-sync')
const prompt=ps()
const bigInt = require("big-integer");
function highrange(){
    const low = parseInt(prompt('Enter lower number: '));
    const high = parseInt(prompt('Enter higher number: '));
    var startTime = new Date();
    function method2(low,high){
    let count=0
    
    console.log(`The prime numbers between ${low} and ${high} are:`);
    for (let i = low; i <= high; i++) {
        const a=bigInt(i).isPrime()
        if(a==true)
        {
        console.log(i);
        count=1
        }
    }
    if(count==0){console.log("Sorry no prime number is found!")}
}
     var endTime = new Date();
     var timeDiff = endTime - startTime;
     var seconds= timeDiff /=1000
     console.log(seconds)
     return {low, high , seconds}
    }
    module.exports=highrange
    