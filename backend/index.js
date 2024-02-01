const express = require("express")
const moongose = require("mongoose")



const app = express()

moongose.connect("mongodb+srv://obpalomo:ZrbmRvNtjT51bdY6@cluster1.zlkhvg5.mongodb.net/peliculas")
.then(() => {
    console.log('Conexión con base de datos exitosa');
})
.catch((err) => {
    console.log(`Error al conectar la base de datos: ${err}`);
})


app.listen(3000, () =>{
    console.log('API funcionando...en puerto 3000')
})