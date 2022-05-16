const Nea = require("../models/models_neas");
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

const getNeas = async (req, res) => {
  let data;
  try {
 if (req.params.class) {
   console.log("por class")
      console.log(req.params.class);
      data = await Nea.find(
        { orbit_class: req.params.class },
        "orbit_class designation discovery_date -_id"
      );
      res.status(200).json(data);
    } else if (req.query.from && req.query.to) {
      data = await Nea.find(
        { discovery_date: { $gte: req.query.from, $lte: req.query.to } },
        "orbit_class designation discovery_date -_id"
      );
      res.status(200).json(data);
    } else if (req.query.from) {
      data = await Nea.find(
        { discovery_date: { $gte: req.query.from } },
        "orbit_class designation discovery_date -_id"
      );
      res.status(200).json(data);
    } else if (req.query.to) {
      data = await Nea.find(
        { discovery_date: { $lte: req.query.to } },
        "orbit_class designation discovery_date -_id"
      );
      res.status(200).json(data);
    } else {
      data = await Nea.find({}, '-_id')
          res.status(200).json(data)
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const createNewNea= async (req, res) => {
  try {
    console.log(req.params)
    const lan = {
      designation: req.params.designation,
      orbit_class: req.params.orbit_class,
      h_mag: req.params.h_mag,
      period_yr: req.params.period_yr,
      discovery_date: req.params.discovery_date,
      q_au_1: req.params.q_au_1,
      q_au_2: req.params.q_au_2,
    }
    await Landing.create(lan);
    res.status(201).json({ message: "nea creada" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const editNeas = async (req, res) => {
  console.log(req.params)
  try {
    let query = { designation: req.params.designation };
    let update = {
      designation: req.params.designation,
      orbit_class: req.params.orbit_class,
      h_mag: req.params.h_mag,
      period_yr: req.params.period_yr,
      discovery_date: req.params.discovery_date,
      q_au_1: req.params.q_au_1,
      q_au_2: req.params.q_au_2,
    };
    const result = await Nea.findOneAndUpdate(query, update, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({ message: "nea modificada" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
const deleteNeas = async (req, res) => {
    try {
      await Nea.deleteOne({ designation: req.params.designation })
      res.status(200).send('Nea Borrado');
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };
module.exports = { getNeas, createNewNea, editNeas, deleteNeas};
