// // const express = require("express")
// // const app = express();
// // const path = require("path")
// // const serverRoute = require("./serverRoute")

// // app.use(express.json())
// // app.use(express.urlencoded({extended: false}))
// // app.use(express.static(path.join(__dirname + "/public")))

// // app.use("/api/", serverRoute);

// // const PORT = process.env.PORT || 5000

// // app.listen(PORT, "0.0.0.0", () => {
// //     console.log("server started on 5000")
// // })

// // const express = require("express")
// const app = express()

// // require('dotenv').config()

// app.use(express.urlencoded({extended: false}))
// app.use(express.json())

// const serverRoute = require("./serverRoute")

// app.use("/api", serverRoute)

// const PORT = process.env.PORT || 5000

// app.listen(PORT, () => {
//     console.log("Server is running....")
// })

const express = require("express");
const { Router } = require("express");
const router = Router();
const db = require("./database");

router.use((req, res, next) => {
  console.log("request made to server route");
  next();
});

router.get("/", async (req, res) => {
  try {
    // Create a new MySQL connection instance
    const connection = mysql.createConnection({
      host: 'bvjx9vxnnapywt8oi7oh-mysql.services.clever-cloud.com',
      user: 'utpprvmh23np6jwe',
      password: 'tcOqn2tDVFbd36xtj8o2',
      database: 'bvjx9vxnnapywt8oi7oh',
      port: 3306
    });

    // Connect to the MySQL server
    await connection.connect();

    // Execute your query
    const query = "SELECT S.id, G.nazwa as nazwaGrupy, S.imie, S.nazwa as nazwisko FROM STUDENT S LEFT JOIN GRUPA G ON S.id_grupa = G.id";
    const [results] = await connection.promise().query(query);

    // Close the connection
    connection.end();

    res.status(200).send(results);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;