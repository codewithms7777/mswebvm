const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from new public folder
app.use(express.static(path.join(__dirname, "/public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "routes/index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Node.js app listening at http://0.0.0.0:${port}`);
});
