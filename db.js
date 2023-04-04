const mongoose = require("mongoose");

const connection  = mongoose.connect(`mongodb+srv://mongodb:mongodb@cluster0.c6goz.mongodb.net/CalculateApp?retryWrites=true&w=majority`);


module.exports = {connection}
