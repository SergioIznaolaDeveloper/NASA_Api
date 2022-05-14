const express = require("express");
const router = express.Router();
const landings = require("../controllers/controllers_landings");
const neas = require("../controllers/controllers_neas");

// rutas para Neas
router.get("/api/astronomy/neas", neas.getNeas);
router.get("/api/astronomy/neas/class/:class?", neas.getNeas);
router.post("/api/astronomy/neas/create", neas.createNewNea);
router.put("/api/astronomy/neas/edit/:designation", neas.editNeas);
router.post("/api/astronomy/neas/delete/:designation", neas.deleteNeas);

// Rutas para landings
router.get("/api/astronomy/landings", landings.getLandingsQuery);
router.get("/api/astronomy/landings/mass/:mass?/:order?", landings.getLandingsMass);
router.get(
  "/api/astronomy/landings/class/:recclass?/:order?",
  landings.getLandingClass
);
router.post("/api/astronomy/landings/create/:name/:id/:recclass/:mass/:year/:reclat/:reclong", landings.createNewLanding);
router.put("/api/astronomy/landings/edit/:id", landings.editLanding);
router.post("/api/astronomy/landings/delete/:id", landings.deleteLanding);

module.exports = router;