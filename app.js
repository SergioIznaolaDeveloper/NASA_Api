require("dotenv").config(); //archivo para proteger contraseñas
const express = require("express");
const path = require("path");
const app = express(); // Inicializa el servidor. App es un bjeto que representa el server
const port = process.env.PORT || 5000; // Puerto donde se va a correr el servidor
const host = '0.0.0.0'; // Host donde se va a correr el servidor
const routes = require("./routes/routes");
require("./utils/MongoDb");

const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true })); //Estas dos son para los métodos put y post, para que el servidor pueda leer la información nueva que le mandamos
app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/", routes);

app.listen(port, host, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
