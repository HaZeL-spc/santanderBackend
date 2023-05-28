const { Router } = require("express")
const router = Router()
const db = require("./database")

router.use((req, res, next) => {
    console.log("request made to server route")
    next()
})

// router.get("/", async (req, res) => {
//     const query = "SELECT S.id, G.nazwa as nazwaGrupy, S.imie, S.nazwa as nazwisko FROM student S " + 
//     " LEFT JOIN grupa G ON S.id_grupa = G.id "
//     const results = await db.promise().query(query);

//     console.log(results[0])
//     res.status(200).send(results[0])
// })

router.get("/getstudentsgroup", async (req, res) => {
    console.log("in /");
    const query = "SELECT id_student, G.nazwa as nazwaGrupy, P.temat, S.imie, S.nazwa FROM student S" + 
        " JOIN grupa G ON S.id_grupa = G.id " +
        " JOIN projekt P ON P.id_student = S.id"
    const results = await db.promise().query(query);

    res.status(200).send(results[0])
})

router.get("/getstudentsgroupnull", async (req, res) => {
    console.log("in /");
    const query = "SELECT S.id, G.nazwa as nazwaGrupy, S.imie, S.nazwa as nazwisko FROM student S " + 
        " LEFT JOIN grupa G ON S.id_grupa = G.id "
    const results = await db.promise().query(query);

    console.log(results[0])

    res.status(200).send(results[0])
})

router.get("/getprowadzacyprojekt", async (req, res) => {
    console.log("in /");
    const query = "SELECT P.id, P.nazwisko, P.imie, PRO.temat  FROM prowadzacy P " + 
        " JOIN projekt PRO ON PRO.id_prowadzacy = P.id"
    const results = await db.promise().query(query);

    res.status(200).send(results[0])
})

router.get("/getstudentoversrednia", async (req, res) => {
    console.log("in /");
    const query = "SELECT S.id, S.imie, S.nazwa as nazwisko, S.srednia FROM student S " + 
        " WHERE S.srednia > (SELECT AVG(srednia) from student)"
    const results = await db.promise().query(query);

    res.status(200).send(results[0])
})

module.exports = router