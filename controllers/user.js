
import User from "../models/User.js"


export const updateUser = async (req,res,next)=>{
    
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new :true}) 
        res.status(200).json(updatedUser);
    }
    catch(err){
        next(err);
    }
}
export const deleteUser = async (req,res,next)=>{
   
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id,{new :true}) 
        res.status(200).json(deletedUser);
    }
    catch(err){
        next(err);
    }
}
export const getUser = async (req,res,next)=>{
    try{
        const fetchedUser = await User.findById(req.params.id) 
        res.status(200).json(fetchedUser);
    }
    catch(err){
        next(err);
    }
}
export const getAllUser = async (req,res,next)=>{
    try{
        const fetchedUser = await User.find() 
        res.status(200).json(fetchedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
}