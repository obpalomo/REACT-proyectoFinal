const Film = require("../models/film.model")

async function findAll(req,res){
    try {
        const films = await Film.find()
        return res.json(films)
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"error al buscar las películas"})
    }

}


async function insert(req,res){
    try {
        const newFilm = new Film({
            title:req.body.title,
            year:req.body.year,
            synopsis:req.body.synopsis,
            category:req.body.category,
            director:req.body.director
        })
        await newFilm.save()
        return res.json({msg:"pelicula guardada"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"error al guardar la película"})
    }
}

async function deleteOne(req,res){
    try {
        await Film.findByIdAndDelete(req.params.id)
        return res.json({msg:"pelicula eliminada"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"error al eliminar la película"})
    }

}


module.exports = {
    findAll,
    insert,
    deleteOne
}