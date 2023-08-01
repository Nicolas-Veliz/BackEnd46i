const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/futbol"

const conectDb = async () => {
    try{
        mongoose.connect(uri)
        .then(() => console.log("Estamos conectados a la base de datos.!"));
    } catch (error) {
        console.log(error)
    }
};

module.exports = conectDb;
