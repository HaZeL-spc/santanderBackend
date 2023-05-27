const express = require("express")
const app = express();
const path = require("path")
const serverRoute = require("./serverRoute")

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname + "/public")))

app.use("/api/", serverRoute);

app.listen(5000, () => {
    console.log("server started on 5000")
})