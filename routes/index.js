const express = require("express");
const router = express.Router();
const uuid4 = require("uuid4");
const myVar = require("./myvar");
const setVar = new myVar(); // require로 가지고오면 객체생성해서 써야함
router.get("/",(req,res)=>{
    if(로그인X){
        res.redirect("/login")
    }
    res.render("main/index.html",{
        message : "hi what's your name?11" + setVar.name,
        online : "<h1>태그가 출력됩니다.</h1>"
    })
})

module.exports = router;