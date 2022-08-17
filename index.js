const express = require("express")
const data = require("./data.json")
const app = express()
const port = process.env.PORT || 3000


app.get('/',(req,res) => {
    res.send("hi");
})
app.get('/data',(req,res) => {
    res.send(data);
})

app.listen(port,()=>{
    console.log('App is listening = ',port);
    
})
