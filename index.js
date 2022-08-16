const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 3000;
const dataapi = require("./red.json");

app.get("/",(req,res)=>{
    res.send("hello")

})

app.listen(port,()=>{
    console.log("hi");
})