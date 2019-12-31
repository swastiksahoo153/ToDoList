const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"))

app.set('view engine', 'ejs');
var items=[]
var workItems=[]

app.get('/',function(req,res){
    
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today  = new Date();

    var day=(today.toLocaleDateString("en-US", options));

    res.render("list",{listTitle: day,newListItems:items})
})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems:workItems})
})

app.get("/about",function(req,res){
    res.render("about")
})

app.post('/',function(req,res){
    item=req.body.nitem
    if(req.body.button==="Work"){
        workItems.push(item)
        res.redirect('/work')
    }
    else{
        items.push(item)
        res.redirect('/')
    }
})

app.listen(3000,function(){
    console.log("server started at port 3000")
})
