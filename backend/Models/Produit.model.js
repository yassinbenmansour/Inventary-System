const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
    nomProduit : String,
    descProduit: String,
    Categorie: String,
    PrixProduit : Number,
    Stock : Number,
});


const Produit = mongoose.model('Produit', produitSchema );

module.exports = Produit;