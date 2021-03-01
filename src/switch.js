const ps=require('prompt-sync')
const prompt=ps()
const bigInt = require("big-integer");
const prime = require('./prime.js');
require('./prime.js')
require('./smallrange.js')
require('./highrange')
const select_algo=prime()
function switch_c() {
    
switch(select_algo)
{
    case 1: 
        const[low,high,seconds]= smallrange()
        console.log(low)
        console.log(high)
        console.log(seconds)
         break
    case 2: 
    const[low,high,seconds]= highrange()
    console.log(low)
    console.log(high)
    console.log(seconds)
        break
    default: console.log("enter algo currectly")

}
}
switch_c()
module.exports=switch_c