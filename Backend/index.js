import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connnect to mongoDB 
async function connectDB(){
    try {
        await mongoose.connect(URI);
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
    }
}
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// defining route
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
