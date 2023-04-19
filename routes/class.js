import express from "express";
import { createClass, deleteClass, getAllClass, getClass, updateClass } from "../controllers/class.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create 
router.post("/:instituteId",verifyAdmin,createClass);

//UPDATE 
router.put("/:id",verifyAdmin,updateClass);

//  Delete 
router.delete("/:id/:instituteId",verifyAdmin,deleteClass);

//GET 
router.get("/:id",getClass);

router.get("/:",getAllClass)

export default router; 
