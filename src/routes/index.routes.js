const express = require("express");
const router = express.Router();


let nombre = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
const posts = [
  { title: nombre[0], tipo: "Homer J. Simpson"},
  { title: nombre[1], tipo: "Marjorie Jaqueline Bouvier Simpson"},
  { title: nombre[2], tipo: "Bartholomew Jojo Simpson"},
  { title: nombre[3], tipo: "SLisa Marie Simpson"},
  { title: nombre[4], tipo: "Margaret Abigail Simpson Bouvie"},
];

// GET (/persona) con render de ejs info: https://ejs.co/
router.get("/persona", (req, res) => {
  res.render("pages/persona", {
    persona: posts,
  });
});

// GET con If (persona/usuario) go => reply || replyF
router.get("/persona/:usuario", function (require, response) {
  let usuario = require.params.usuario;
  let posicion = nombre.indexOf(usuario);

  if (nombre[posicion] == usuario) {
    response.render("pages/reply", {
      usuario: usuario,
    });
  } else {
    response.render("pages/replyF", {
      usuario: usuario,
    });
  }
});

module.exports = router;
