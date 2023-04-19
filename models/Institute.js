import mongoose from "mongoose";
const { Schema } = mongoose;


const InstituteSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    distance:{
        type:String,
        required:true,
    },
    photos:{
        type:[String],
        required:false,
    },
    description:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        min: 0,
        max: 0,

    },
    class:{
        type:[{number: Number, available: Boolean}],
       
        
    },
    Price :{
        type:String,
        required: true,
    },
    features:{
        type: Boolean,
        default: false,

    }
})
export default mongoose.model("Institute", InstituteSchema);