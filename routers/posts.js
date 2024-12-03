const express = require("express");
const router = express.Router();
// Importare i miei "POSTS"
const menu = require("../menu");

// INDEX
router.get("/", (req, res) => {
  res.send("Lista dei post");
});
// SHOW
router.get("/:id", (req, res) => {
  res.send("Visualizzare un elemento");
});
// CREATE
router.post("/", (req, res) => {
  res.send("Visualizzare un elemento");
});

// UPDATE
// Modificare interamente un elemento
router.put("/:id", (req, res) => {
  res.send("Modificare interamente un elemento");
});
// modificare parzialmente un elemento
router.patch("/:id", (req, res) => {
  res.send("modificare parzialmente un elemento");
});
// DELETE
router.delete("/:id", (req, res) => {
  res.send("Eliminare un elemento");
});

// esportare il ROUTER
module.exports = router;
