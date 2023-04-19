
import Institute from "../models/Institute.js"

export const createInstitute = async (req,res,next)=>{
    const newInstitute = new Institute(req.body)
    try{
        const savedInstitute = await newInstitute.save();
        res.status(200).json(savedInstitute);
    }
    catch(err){
        next(err);
    }
}

export const updateInstitute = async (req,res,next)=>{
    
    try{
        const updatedInstitute = await Institute.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new :true}) 
        res.status(200).json(updatedInstitute);
    }
    catch(err){
        next(err);
    }
}
export const deleteInstitute = async (req,res,next)=>{
   
    try{
        const deletedInstitute = await Institute.findByIdAndDelete(req.params.id,{new :true}) 
        res.status(200).json(deletedInstitute);
    }
    catch(err){
        next(err);
    }
}
export const getInstitute = async (req,res,next)=>{
    try{
        const fetchedInstitute = await Institute.findById(req.params.id) 
        res.status(200).json(fetchedInstitute);
    }
    catch(err){
        next(err);
    }
}
export const getAllInstitute = async (req,res,next)=>{
    const {min , max ,limit, ...others } = req.query;
    console.log(req.query)
    try{
        const fetchedInstitute = await Institute.find(
            {...others,Price:{$gt : min | 1 , $lt : max ||99999} }
        ).limit(parseInt(req.query.limit)); 
        res.status(200).json(fetchedInstitute);
    }
    catch(err){
        res.status(500).json(err);
    }
}

export const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Institute.countDocuments({city:city})
        }))
        res.status(200).json(list);
    }
    catch(err){
        res.status(500).json(err);
    }
}

export const countByType = async (req,res,next)=>{
    try{
       const instCount = await Institute.countDocuments({type:"Institute"});
       const coachingCount = await Institute.countDocuments({type:"Coaching"})
       const personalCount = await Institute.countDocuments({type:"Personal"})

        res.status(200).json(
            [
                {type:"Institute",count:instCount},
                {type:"Coaching",count:coachingCount},
                {type:"Personal",count:personalCount},

            ]
        );
    }
    catch(err){
        res.status(500).json(err);
    }
}

export const getHotelRooms = async (req,res,next)=>{
    try{
        const institu = Institute.findById(req.params.id);
        
    }
    catch(err){
        next(err);
    }
}