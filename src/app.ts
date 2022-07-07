import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import mainRouter from "./routers/index.js";

import { errorHandler } from "./middlewares/index.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, ()=> {
  console.log(`Server running: ${port}`);
});