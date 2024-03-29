const express = require("express")
const moongose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
const filmRoutes = require("./routes/film.routes")


const app = express()

app.use(cors())

app.use(express.json())



moongose.connect("mongodb+srv://obpalomo:ZrbmRvNtjT51bdY6@cluster1.zlkhvg5.mongodb.net/Movies")
.then(() => {
    console.log('Conexión con base de datos exitosa');
})
.catch((err) => {
    console.log(`Error al conectar la base de datos: ${err}`);
})


app.use("/api/users", userRoutes)
app.use("/api/films", filmRoutes)


app.listen(3000, () =>{
    console.log('API funcionando...en puerto 3000')
})