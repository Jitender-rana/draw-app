import express from "express";
import cors from "cors";
const app=express();
app.use(express.json());
app.use(cors());

import { userRouter } from "./routes/user";
import { roomRouter } from "./routes/room";


app.use("/user",userRouter);
app.use("/room",roomRouter);


app.listen(3001,()=>{
    console.log("listening on port 3001");
})