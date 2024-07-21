import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req,res) => {
    res.send("Helloo")
})

app.listen(3000, () => {
    console.log("server running on port " + PORT)
})
