const express = require('express');
const app = express();
const port = 3001;
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));


// -- SAMM [commented out res.send so our page opens on landing].

// app.get('/', (req,res)=>{
// 	res.send("Welcome to our Project")
// })

// -- SAMM [changed landing link to initial rout '/']
app.get('/', (req,res)=>{
	res.render("landing")
})
app.get('/roadMap', (req,res)=>{
	res.render("roadMap")
})
app.get('/nav', (req,res)=>{
	res.render("nav")
})

app.get('/contactus', (req,res)=>{
	res.render("contactus")
})

app.listen(port,()=>
console.log(`Server running on port ${port}!`)
)