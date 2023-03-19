const express = require("express");
const router = express.Router();

let nombre = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

const persona = [
  { title: nombre[0], name: "Homer J. Simpson", uri: "http://localhost:3000/persona/Homer" },
  { title: nombre[1], name: "Marjorie Jaqueline Bouvier Simpson", uri: "http://localhost:3000/persona/Marge" },
  { title: nombre[2], name: "Bartholomew Jojo Simpson", uri: "http://localhost:3000/persona/Bart" },
  { title: nombre[3], name: "Lisa Marie Simpson", uri: "http://localhost:3000/persona/Lisa" },
  { title: nombre[4], name: "Margaret Abigail Simpson Bouvie", uri: "http://localhost:3000/persona/Maggie" },
];

router.get("/", (req, res) => {
  res.render("pages/index");
});

// GET (/persona) con render de ejs info: https://ejs.co/
router.get("/persona", (req, res) => {
  res.render("pages/persona.ejs", {
    persona: persona
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
