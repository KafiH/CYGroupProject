const express = require('express');
const app = express();
const port = 3001;
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));



app.get('/', (req,res)=>{
	res.send("Welcome to our Project")
})

app.get('/landing', (req,res)=>{
	res.render("landing")
})

app.listen(port,()=>
console.log(`Server running on port ${port}!`)
)