import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()


mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)

})

const app = express()

const PORT = process.env.PORT || 4000

app.get("/", (req,res) => {
    res.send("Helloo")
})

app.listen(4000, () => {
    console.log("server running on port " + PORT)
})
