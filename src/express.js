const express=require('express')
const prime = require('./prime.js')
const switch_c = require('./switch.js')
require('./prime.js')
require('./switch.js')
require('./mongodb.js')
const app=express()
const port=process.env.PORT || 3000
app.use(express.json())

app.post('/users',async(req,res)=>{
    const user=new User(req.body)       // creating new user
    try{
        await prime()
        await switch_c()
        await user.save()
        res.status(201).send(user)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
})
app.listen(port,()=>{
    console.log("server is on port"+port)
})