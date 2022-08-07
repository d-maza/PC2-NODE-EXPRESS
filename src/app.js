const express = require("express"); 
const app = express();
const port = 3000; // Puerto asignado

const path = require("path");
app.set("view engine", "ejs"); 

// Starting 
app.get("/", (req, res) => {
  res.render("pages/index");
});

// Static files (Web)
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use(require("./routes/index.routes"));

// 404
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public/404.html"));
});

// Levantado el puerto (port)
app.listen(port, () => {
  console.log(`Servideor iniciado en el puerto ${port} ...`);
});

