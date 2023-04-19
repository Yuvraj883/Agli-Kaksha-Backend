import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username:{
        type:String, 
        required: true, 
        unqiue: true,
    },
    email:{
        type:String, 
        required: true, 
        unqiue: true,
    },
    password:{
        type:String, 
        required: true, 
     
    },
    isAdmin: {
        type: Boolean,
        default : false, 
    }

},{timestamp:true})
export default mongoose.model("User",UserSchema);