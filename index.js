const express = require("express")
const app = express();
const path = require("path")
const history = require('express-history-api-fallback');
const serverRoute = require("./serverRoute")


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname + "/public")))

app.use("/api/", serverRoute);
const root = `${__dirname}/public`;
app.use(history('index.html', { root }));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("server started on 5000")
})

module.exports = app;
