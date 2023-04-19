import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import classRoute from "./routes/class.js"
import instituteRoute from "./routes/institute.js"
import cookieParser from "cookie-parser";
import  cors from 'cors'



const app = express(); 
dotenv.config()
app.use(cors())

const connect = async() =>{
	try{
		await mongoose.connect(process.env.MONGO);
		console.log("Connected to MongoDB");

	}catch(err){
		throw err;
	}

}
mongoose.connection.on("disconnected",() => {
	console.log("Database Disconnected");
})

mongoose.connection.on("connected",() => {
	console.log("Database Connected");
});
app.use(cookieParser())
app.get("/",(req,res)=> {
	res.send("Hello world");
});

app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/institute",instituteRoute);
app.use("/api/class",classRoute);


app.use((err,req,res,next)=>{
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong"
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage
});
})
app.listen(8080,()=>{
	connect();
	console.log("listening on port 8080");
});
