const express = require("express");
const productoSchema = require("../models/producto");

const router = express.Router();

// create producto
router.post("/crear-productos", (req, res) => {
    const producto = productoSchema(req.body);
    producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// get all productos
router.get("/consultar-productos", (req, res) => {
    productoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

// get a producto
router.get("/buscar-productos/:id", (req, res) => {
   const { id } = req.params;
   productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// update a producto
router.put("/editar-productos/:id", (req, res) => {
    const { id } = req.params;
    const { name_producto, precio, img_url } = req.body;
    productoSchema
     .updateOne({_id: id}, {$set: {name_producto, precio, img_url}})
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error}));
 });

// delete a producto
router.delete("/borrar-productos/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
     .remove({_id: id})
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error}));
 });

module.exports = router;