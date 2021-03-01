const ps=require('prompt-sync')
//const db=require('./mongodb.js')
const prompt=ps()
const bigInt = require("big-integer");
const prime=()=>{
const select_algo=parseInt(prompt('enter 1 for generating prime in small digit range & enter 2 for generating prime in small digit range'))
return select_algo
}
prime();
module.exports=prime
