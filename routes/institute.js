import express from "express";
import { createInstitute ,updateInstitute,deleteInstitute,getInstitute,getAllInstitute, countByCity,countByType } from "../controllers/institute.js";
import Institute from "../models/Institute.js"
const router = express.Router();
import {createError} from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
//CREATE 
router.post("/",verifyAdmin,  createInstitute)  
//UPDATE
router.put("/:id",verifyAdmin, updateInstitute)  
//DELETE
router.delete("/:id",verifyAdmin,deleteInstitute)  
//GET
router.get("/find/:id",getInstitute)  
//GET ALL
router.get("/",getAllInstitute) 
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
// router.get("/class/:id", getHotelRooms);
export default router; 
