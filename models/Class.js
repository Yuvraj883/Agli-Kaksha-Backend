import mongoose from "mongoose";
const classSchema = new mongoose.Schema({
    title:{
        type:String, 
        required: true, 
        unqiue: true,
    },
    price:{
        type:Number, 
        required: true, 
    },
    desc:{
        type:String, 
        required: true, 
     
    },
    maxPeople:{
        type:Number, 
        required: true, 
     
    },
    desc:{
        type:String, 
        required: true, 
     
    },
    roomNumbers:[{number:Number,unavailableDates: {type: [Date]}}]

},{timestamp:true})
export default mongoose.model("Class",classSchema);