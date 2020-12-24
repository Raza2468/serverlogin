var express = require("express")
var bodyParser = require('body-parser');
var serverback = express()



serverback.use(bodyParser.json());
serverback.use(bodyParser.urlencoded({ extended: true }));
// Redistar account =========================================>
var arr =[]
serverback.get('/', function (req, res ,next) {
res.sendFile('index.html',{root:__dirname})
})

serverback.post("/user",(req,res,next)=>{
arr.push(req.body)
// console.log(arr);
// console.log(JSON.stringify(req.body));
// console.log("a",json.parse(req.body));
})

// sigin up  =================================================>
var array=[]
serverback.get('/sigin.html', function (req, res ,next) {
res.sendFile('sigin.html',{root:__dirname})
})

serverback.post("/cheak",(req,res,next)=>{
// console.log("req.body",req.body);
array.push(req.body)
a={
        email:req.body.email,
        pswd:req.body.pswd,
    }


// condition cheak ============================================>
var flag = false; 
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].email===a.email) {
        flag = i;
        break;
    }}
// console.log("cofrom");
if(flag===false){
    console.log("user not found")   
}
else if (arr[flag].pswd===a.pswd) {
    console.log("login susse full");
}else{
    console.log("and");
}})
// server =====================================================>
 serverback.listen(3001,()=>{
    console.log("chal gaya hai");
})
