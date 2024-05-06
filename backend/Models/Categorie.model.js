const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
    nomCategorie : String,
    description : String
});


const Categorie = mongoose.model("Categorie", categorieSchema);

module.exports = Categorie;