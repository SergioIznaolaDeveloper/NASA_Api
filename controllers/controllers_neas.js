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
  if(req.params.order === "orbit_class"){
   console.log("order por class")
      data = await Nea.find(
        { orbit_class: req.params.class },
        "-_id"
      ).sort({ orbit_class: 1 });
      res.status(200).json(data);
  }else if (req.params.order === "designation"){
    console.log("order por desig")
    if (req.params.class.length < 3) {
      console.log("h_mag order por desig")
      data = await Nea.find(
        { h_mag: req.params.class },
        "-_id"
      ).sort({ designation: 1 });
      res.status(200).json(data);
    } else {
     console.log("orbit class order por desig")
    data = await Nea.find(
      { orbit_class: req.params.class },
      "-_id"
    ).sort({ designation: 1 });
    res.status(200).json(data);
    }
  } else if (req.params.order === "h_mag"){
    console.log("order por h_mag")
    data = await Nea.find(
      { orbit_class: req.params.class },
      "-_id"
    ).sort({ h_mag: 1 });
    res.status(200).json(data);
  } else if (req.params.order === "period__yr"){
    console.log("order por date")
    data = await Nea.find(
      { orbit_class: req.params.class},
      "-_id"
    ).sort({ period_yr: 1 });
    res.status(200).json(data);
  } else {
    if (req.params.class.length < 3) {
    data = await Nea.find({
      h_mag: req.params.class
    },
      "-_id")
    res.status(200).json(data)
  } else {
    data = await Nea.find({
      orbit_class: req.params.class
    },
      "-_id")
    res.status(200).json(data)
  }
  }
    } else if (req.query.from && req.query.to) {
      console.log("from to backend"+req.query.order)
      if(req.query.order === "orbit_class"){
        
      data = await Nea.find(
        { discovery_date: { $gte: req.query.from, $lte: req.query.to } },
        " -_id"
      ).sort({ orbit_class: 1 });
      res.status(200).json(data);
      }else if(req.query.order === "designation"){
        
        data = await Nea.find(
          { discovery_date: { $gte: req.query.from, $lte: req.query.to } },
          " -_id"
        ).sort({ designation: 1 });
        res.status(200).json(data);
      }else if(req.query.order === "period_yr"){
        
        data = await Nea.find(
          { discovery_date: { $gte: req.query.from, $lte: req.query.to } },
          " -_id"
        ).sort({ period_yr: 1 });
        res.status(200).json(data);
      } else if (req.query.order === "h_mag"){
        
        data = await Nea.find(
          { discovery_date: { $gte: req.query.from, $lte: req.query.to } },
          " -_id"
        ).sort({ h_mag: 1 });
        res.status(200).json(data);
      } else {
        data = await Nea.find(
          { discovery_date: { $gte: req.query.from, $lte: req.query.to } },
          " -_id"
        );
        res.status(200).json(data);
      }
    } else if (req.query.from) {
      data = await Nea.find(
        { discovery_date: { $gte: req.query.from } },
        "-_id"
      );
      res.status(200).json(data);
    } else if (req.query.to) {
      data = await Nea.find(
        { discovery_date: { $lte: req.query.to } },
        "-_id"
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
      res.redirect('/delete');;
    } catch (err) {
      res.redirect('/nodelete');
    }
  };
module.exports = { getNeas, createNewNea, editNeas, deleteNeas};
