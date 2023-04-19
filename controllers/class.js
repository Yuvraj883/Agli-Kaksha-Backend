import Class from "../models/Class.js";
import { createError } from "../utils/error.js";


export const createClass = async (req,res,next)=>{
    const instituteid = req.params.instituteId;
    const newClass = new Class(req.body);

    try{
        const savedClass = await newClass.save();
        try{
            await Institute.findByIdAndUpdate(instituteid,{
                $push :{class: savedClass._id},
            })
        }
        catch(err){
            next(err);
        }
        res.status(200).json(savedClass);
    }
    catch(err){
        next(err);
    }
}

export const updateClass = async (req,res,next)=>{
    
    try{
        const updatedClass = await Class.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new :true}) 
        res.status(200).json(updatedClass);
    }
    catch(err){
        next(err);
    }
}
export const deleteClass = async (req,res,next)=>{
   
    try{
        const deletedClass = await Class.findByIdAndDelete(req.params.id,{new :true}) 
        try{
            await Institute.findByIdAndDelete(instituteId,{
                $pull:{rooms:req.params.id}
            })
        }
        catch(err){
            next(err);
        }
        res.status(200).json(deletedClass);
    } 
    catch(err){
        next(err);
    }
}
export const getClass = async (req,res,next)=>{
    try{
        const fetchedClass = await Class.findById(req.params.id) 
        res.status(200).json(fetchedClass);
    }
    catch(err){
        next(err);
    }
}
export const getAllClass = async (req,res,next)=>{
    try{
        const fetchedClass = await Class.find() 
        res.status(200).json(getAllClass);
    }
    catch(err){
        res.status(500).json(err);
    }
}