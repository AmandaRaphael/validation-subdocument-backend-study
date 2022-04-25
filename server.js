import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import pokedex from "./routes/pokedex.js";



const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = dotenv.config().parsed;

const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();
const port = 3001;

app.use(express.json());

app.use("/pokedex",pokedex)

mongoose.connect(dbConnectionString).then((
  console.log('Connected to the database')
  
)).catch((e)=>{ console.log('Not connected to the database',e)})


app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
