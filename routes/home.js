import express from 'express'
const router = express.Router()

router.get("/", (req, res, next)=>{
    res.render("index")
})
router.get("/careers", (req, res, next)=>{
    res.render("careers")
})
router.get("/about", (req, res, next)=>{
    res.render("about")
})
router.get("/booking", (req, res, next)=>{
    res.render("booking")
})
router.get("/menu", (req, res, next)=>{
    res.render("menu")
})
router.get("/contact", (req, res, next)=>{
    res.render("contact")
})


export default router