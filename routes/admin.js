const express = require("express");
const router = express.Router();


function loginRequired(req,res,next){
    /*if(){
        res.redirect("/login");
    } else {
        next();
    }*/
}

router.get('/admin', loginRequired, (req, res) => {
    if (req.status == 500) {
        res.status(500).send({
            message: '데이터 존재하지 않습니다.'
        })
    } else if (req.status == 404) {
        res.status(404).send({
            message: '페이지가 존재하지 않습니다.'
        })
    } else {
        res.status(200).render("main/admin.html", {
            message: 'admin page'
        });
    }
})
module.exports = router;