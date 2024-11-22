const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
    },
    completed: { 
        type: Boolean, 
        default: false 
    },
})
module.exports=mongoose.model('task',taskSchema);