console.log("first try")
const express = require('express')
const app = express()
const port = 3030

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.render("landing1")
})
app.get('/nav', (req,res)=>{
    res.render("nav")
}) // -- this can be ignored

app.listen(port, ()=>
console.log("server running"))