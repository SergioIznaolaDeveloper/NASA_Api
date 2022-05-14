const Landing = require("../models/models_landings");
// const toNumber = async() => {
//     await Landing.updateMany(
//          { 'mass' : { $type: 2 }},
//          [{ $set: { 'mass': { $toDouble: '$mass' } } }]
//         )
// }
// toNumber()
const getLandingsMass = async (req, res) => {
  let data;
  try {
    if (req.params.mass) {
      if (req.params.order === "mass") {
        data = await Landing.find({ mass: { $gte: req.params.mass } }, "-_id").sort({mass: 1});
        res.status(200).json(data);
      } else if (req.params.order === "class") {
        data = await Landing.find({ mass: { $gte: req.params.mass } }, "-_id").sort({recclass: 1});
        res.status(200).json(data);
      } else if (req.params.order === "id") {
        data = await Landing.find({ mass: { $gte: req.params.mass } }, "-_id").sort({id: 1});
        res.status(200).json(data);
      } else if (req.params.order === "name") {
        data = await Landing.find({ mass: { $gte: req.params.mass } }, "-_id").sort({name: 1});
        res.status(200).json(data);
      } else {
      data = await Landing.find({ mass: { $gte: req.params.mass } }, "-_id").sort({mass: 1});
      res.status(200).json(data);
      }
    } else {
      data = await Landing.find({});
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getLandingClass = async (req, res) => {
  let data;
  try {
    if (req.params.recclass) {
      if (req.params.order === "mass") {
        data = await Landing.find({ recclass: req.params.recclass }, "-_id").sort({mass: 1});
        res.status(200).json(data);
      } else if (req.params.order === "class") {
        data = await Landing.find({ recclass: req.params.recclass }, "-_id").sort({recclass: 1});
        res.status(200).json(data);
      } else if (req.params.order === "id") {
        data = await Landing.find({ recclass: req.params.recclass }, "-_id").sort({id: 1});
        res.status(200).json(data);
      } else if (req.params.order === "name") {
        data = await Landing.find({ recclass: req.params.recclass }, "-_id").sort({name: 1});
        res.status(200).json(data);
      } else {
      data = await Landing.find({ recclass: req.params.recclass }, "-_id").sort({recclass: 1});
      res.status(200).json(data);
      }
    } else {
      data = await Landing.find({}, "-_id").sort({ name: 1 });
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
const getLandingsQuery = async (req, res) => {
  let data;
  try {
    if(!req.query.order){
    if (req.query.from && req.query.to) {
      data = await Landing.find(
        { year: { $gte: req.query.from, $lte: req.query.to } },
        "id name mass recclass year reclong reclat -_id"
      ).sort({ year: 1 });
      res.status(200).json(data);
    } else if (req.query.from) {
      data = await Landing.find(
        { year: { $gte: req.query.from } },
        "id name mass recclass year reclong reclat -_id"
      ).sort({ year: 1 });
      res.status(200).json(data);
    } else if (req.query.to) {
      data = await Landing.find(
        { year: { $lte: req.query.to } },
        "id name mass recclass year reclong reclat -_id"
      ).sort({ year: -1 });
      res.status(200).json(data);
    }
  } else {
    if (req.query.from && req.query.to) {
      if(req.query.order === "mass"){
      data = await Landing.find(
        { year: { $gte: req.query.from, $lte: req.query.to } },
        "id name mass recclass year reclong reclat -_id"
      ).sort({ mass: 1 });
      res.status(200).json(data);
      } else if(req.query.order === "class"){
        data = await Landing.find(
          { year: { $gte: req.query.from, $lte: req.query.to } },
          "id name mass recclass year reclong reclat -_id"
        ).sort({ recclass: 1 });
        res.status(200).json(data);
      } else if(req.query.order === "id"){
        data = await Landing.find(
          { year: { $gte: req.query.from, $lte: req.query.to } },
          "id name mass recclass year reclong reclat -_id"
        ).sort({ id: 1 });
        res.status(200).json(data);
      } else if(req.query.order === "name"){
        data = await Landing.find(
          { year: { $gte: req.query.from, $lte: req.query.to } },
          "id name mass recclass year reclong reclat -_id"
        ).sort({ name: 1 });
        res.status(200).json(data);
      } else {
        data = await Landing.find(
          { year: { $gte: req.query.from, $lte: req.query.to } },
          "id name mass recclass year reclong reclat -_id"
        ).sort({ year: 1 });
        res.status(200).json(data);
      }
    } else if (req.query.from) {
      if(req.query.order === "mass"){
        data = await Landing.find(
          { year: { $gte: req.query.from } },
          "id name mass recclass year reclong reclat -_id"
        ).sort({ mass: 1 });
        res.status(200).json(data);
        } else if(req.query.order === "class"){
          data = await Landing.find(
            { year: { $gte: req.query.from } },
            "id name mass recclass year reclong reclat -_id"
          ).sort({ recclas: 1 });
          res.status(200).json(data);
        } else if(req.query.order === "id"){
          data = await Landing.find(
            { year: { $gte: req.query.from } },
            "id name mass recclass year reclong reclat -_id"
          ).sort({ id: 1 });
          res.status(200).json(data);
        } else if(req.query.order === "name"){
          data = await Landing.find(
            { year: { $gte: req.query.from } },
            "id name mass recclass year reclong reclat -_id"
          ).sort({ name: 1 });
          res.status(200).json(data);
        } else {
          data = await Landing.find(
            { year: { $gte: req.query.from } },
            "id name mass recclass year reclong reclat -_id"
          ).sort({ year: 1 });
          res.status(200).json(data);
        }
    } else if (req.query.to) {
      if(req.query.order === "mass"){
        data = await Landing.find(
          { year: {$lte: req.query.to } },
          "id name mass recclass year reclong reclat -_id"
        ).sort({ mass: 1 });
        res.status(200).json(data);
        } else if(req.query.order === "class"){
          data = await Landing.find(
            { year: {$lte: req.query.to } },
            "id name mass recclass year reclong reclat -_id"
          ).sort({ recclass: 1 });
          res.status(200).json(data);
        } else if(req.query.order === "id"){
          data = await Landing.find(
            { year: { $lte: req.query.to } },
            "id name mass recclass year reclong reclat -_id"
          ).sort({ id: 1 });
          res.status(200).json(data);
        } else if(req.query.order === "name"){
          data = await Landing.find(
            { year: { $lte: req.query.to } },
            "id name mass recclass year reclong reclat -_id"
          ).sort({ name: 1 });
          res.status(200).json(data);
        } else {
          data = await Landing.find(
            { year: { $lte: req.query.to } },
            "id name mass recclass year reclong reclat -_id"
          ).sort({ year: 1 });
          res.status(200).json(data);
        }
    } else {
      if(req.query.order === "mass"){
      data = await Landing.find(
        {},
        "id name mass recclass year reclong reclat -_id"
      ).sort({ mass: 1 });
      res.status(200).json(data);
      } else if (req.query.order === "class") {
        data = await Landing.find(
          {},
          "id name mass recclass year reclong reclat -_id"
        ).sort({ recclass: 1 });
        res.status(200).json(data);
      } else if (req.query.order === "id") {
        data = await Landing.find(
          {},
          "id name mass recclass year reclong reclat -_id"
        ).sort({ id: 1 });
        res.status(200).json(data);
      } else if (req.query.order === "name") {
        data = await Landing.find(
          {},
          "id name mass recclass year reclong reclat -_id"
        ).sort({ name: 1 });
        res.status(200).json(data);
      }
    }
  }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const createNewLanding = async (req, res) => {
  console.log(req.body);
  try {
    const lan = req.body;
    await Landing.create(lan);
    res.status(201).json({ message: "landing creada" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
const editLanding = async (req, res) => {
  try {
    let query = { id: req.params.id };
    let update = req.body;
    const result = await Landing.findOneAndUpdate(query, update, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({ message: "landing modificada" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
const deleteLanding = async (req, res) => {
  try {
    await Landing.deleteOne({ id: req.params.id })
    res.redirect('/delete');
  } catch (err) {
    res.redirect('/nodelete');
  }
};
module.exports = {
  deleteLanding,
  editLanding,
  getLandingsMass,
  getLandingClass,
  getLandingsQuery,
  createNewLanding,
};
