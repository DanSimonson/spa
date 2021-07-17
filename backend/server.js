import express from "express";
import data from "./data.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import userRouter from "./routers/userRouter.js";
import messageRouter from "./routers/messageRouter.js";

dotenv.config();
connectDB();
const app = express();

//middleware to return json correctly
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/messages", (req, res) => {
//   res.send(data.messages);
// });

//root routes
app.use("/api/users", userRouter);
app.use("/api/messages", messageRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
