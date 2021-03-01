const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/prime-user',{
    useNewUrlParser:true,
    useCreateIndex:true
},(error)=>{
    if(!error)
    {
        console.log('connected successfully')
    }
    else{
        console.log('error connecting to database')
    }
})
const User=mongoose.model('User',{
    range:{
        type: Number
    },
    timeelapsed:{
        type: Number
    },
    algorithm:{
        type: String,
    }
})

module.exports=User
