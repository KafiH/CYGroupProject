const express = require('express');
const app = express();
const port = 3001;
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));


// -- SAMM [changed landing link to initial rout '/']
app.get('/', (req,res)=>{
	res.render("landing")
})
app.get('/roadMap', (req,res)=>{
	res.render("roadMap")
})
app.get('/summary', (req,res)=>{
	res.render("summary")
})

app.get('/contactus', (req,res)=>{
	res.render("contactus")
})
app.get('/achiev', (req,res)=>{
	res.render("achiev")
})

app.get('/quiz', (req,res)=>{
	res.render("quiz")
})

app.get('/main', (req,res)=>{
	res.render("main")
})

app.get('/about', (req,res)=>{
	res.render("about")
})

app.get('/leaderboard', (req,res)=>{
	res.render("leaderboard")
})


// -- Test Pages
app.get('/nav', (req,res)=>{
	res.render("nav")
})

app.listen(port,()=>
console.log(`Server running on port ${port}!`)
)