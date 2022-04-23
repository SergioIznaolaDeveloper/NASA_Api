require("dotenv").config(); //archivo para proteger contraseñas
const express = require("express");
const path = require("path");
const router = express(); // Inicializa el servidor. App es un bjeto que representa el server
const port = process.env.PORT || 3000; // Puerto donde se va a correr el servidor

require("./utils/MongoDb");
const landings = require("./controllers/controllers_landings");
const neas = require("./controllers/controllers_neas");
const cors = require("cors");
router.use(cors());
router.use(express.urlencoded({ extended: true })); //Estas dos son para los métodos put y post, para que el servidor pueda leer la información nueva que le mandamos
router.use(express.json());
router.get("/", (req, res) => {console.log("Funciona")});
router.get("/api/astronomy/neas", neas.getNeas);
router.post("/api/astronomy/neas/create", neas.createNewNea);
router.put("/api/astronomy/neas/edit/:designation", neas.editNeas);
router.post("/api/astronomy/neas/delete/:designation", neas.deleteNeas);


router.get("/api/astronomy/landings", landings.getLandingsQuery);
router.get("/api/astronomy/landings/mass/:mass?", landings.getLandingsMass);
router.get(
  "/api/astronomy/landings/class/:recclass?",
  landings.getLandingClass
);
router.post("/api/astronomy/landings/create", landings.createNewLanding);
router.put("/api/astronomy/landings/edit/:id", landings.editLanding);
router.post("/api/astronomy/landings/delete/:id", landings.deleteLanding);

router.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
