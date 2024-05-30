const mongoose = require("mongoose");
const uri = "mongodb+srv://benmasouryassine:fZPG91idb7myn4qR@cluster0.giqb5ct.mongodb.net/";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };