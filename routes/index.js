const express = require("express");
const router = express.Router();
const uuid4 = require("uuid4");
const myVar = require("./myvar");
const setVar = new myVar(); // require로 가지고오면 객체생성해서 써야함
router.get("/",(req,res)=>{
    res.render("main/index.html",{
        message : "메인페이지" + setVar.name,
        online : "<h1>태그가 출력됩니다.</h1>"
    })
})

router.get("/login",(req,res) =>{
    res.render("login/signup.html")
})

module.exports = router;