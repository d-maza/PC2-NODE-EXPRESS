const express = require("express"); 
const app = express();
let port = process.env.PORT || 3000;

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
  console.log(`Server listening at http://localhost:${port}`);
});
