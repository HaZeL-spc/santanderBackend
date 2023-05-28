// const express = require("express")
// const app = express();
// const path = require("path")
// const serverRoute = require("./serverRoute")

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
// app.use(express.static(path.join(__dirname + "/public")))

// app.use("/api/", serverRoute);

// const PORT = process.env.PORT || 5000

// app.listen(PORT, "0.0.0.0", () => {
//     console.log("server started on 5000")
// })

const express = require("express")
const app = express()

// require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const serverRoute = require("./serverRoute")

app.use("/api", serverRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})