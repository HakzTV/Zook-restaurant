import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import homeRoutes from "./routes/home.js"
const app = express()

const port = process.env.PORT || 3000

// Middleware
dotenv.config()
// To allow json to be parsed
app.use(express.json())

// Setting ejs to check in the views section
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))


app.use("/", homeRoutes)
app.use("/about", homeRoutes)
app.use("/booking", homeRoutes)
app.use("/careers", homeRoutes)
app.use("/contact", homeRoutes)
app.use("/menu", homeRoutes)



app.listen(port, ()=>{
    console.log(`Server is running on port ${port} `)
})