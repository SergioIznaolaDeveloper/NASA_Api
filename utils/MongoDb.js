const mongoose = require("mongoose");

const url = 'mongodb+srv://patryFuentes:Esamisma2022@cluster0.jm2bo.mongodb.net/nasa_api?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.once('open', () => console.log('Conexión con BD establecida'))

module.exports = mongoose;