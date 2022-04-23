require("dotenv").config(); //archivo para proteger contraseñas
const express = require("express");
const path = require("path");
const app = express(); // Inicializa el servidor. App es un bjeto que representa el server
const port = process.env.PORT || 3000; // Puerto donde se va a correr el servidor
const host = '0.0.0.0'; // Host donde se va a correr el servidor

require("./utils/MongoDb");
const landings = require("./controllers/controllers_landings");
const neas = require("./controllers/controllers_neas");
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true })); //Estas dos son para los métodos put y post, para que el servidor pueda leer la información nueva que le mandamos
app.use(express.json());
app.get("/", (req, res) => {console.log("Funciona")});
app.get("/api/astronomy/neas", neas.getNeas);
app.post("/api/astronomy/neas/create", neas.createNewNea);
app.put("/api/astronomy/neas/edit/:designation", neas.editNeas);
app.post("/api/astronomy/neas/delete/:designation", neas.deleteNeas);


app.get("/api/astronomy/landings", landings.getLandingsQuery);
app.get("/api/astronomy/landings/mass/:mass?", landings.getLandingsMass);
app.get(
  "/api/astronomy/landings/class/:recclass?",
  landings.getLandingClass
);
app.post("/api/astronomy/landings/create", landings.createNewLanding);
app.put("/api/astronomy/landings/edit/:id", landings.editLanding);
app.post("/api/astronomy/landings/delete/:id", landings.deleteLanding);

app.listen(port, host, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
