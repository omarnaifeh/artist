// backend.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(bodyParser.json());

const dataFilePath = "data.json";

// GET: Returnerer alle kunstnere
app.get("/artists", (req, res) => {
  const artists = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
  res.json(artists);
});

// POST: Opretter en ny kunstner
app.post("/artists", (req, res) => {
  const artists = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
  const newArtist = req.body;
  artists.push(newArtist);
  fs.writeFileSync(dataFilePath, JSON.stringify(artists, null, 2));
  res.json(newArtist);
});

// PUT: Opdaterer en eksisterende kunstner
app.put("/artists/:id", (req, res) => {
  const artists = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
  const artistId = req.params.id;
  const updatedArtist = req.body;
  const index = artists.findIndex((artist) => artist.id === artistId);
  if (index !== -1) {
    artists[index] = updatedArtist;
    fs.writeFileSync(dataFilePath, JSON.stringify(artists, null, 2));
    res.json(updatedArtist);
  } else {
    res.status(404).json({ error: "Artist not found" });
  }
});

// DELETE: Sletter en kunstner
app.delete("/artists/:id", (req, res) => {
  const artists = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
  const artistId = req.params.id;
  const index = artists.findIndex((artist) => artist.id === artistId);
  if (index !== -1) {
    const deletedArtist = artists.splice(index, 1)[0];
    fs.writeFileSync(dataFilePath, JSON.stringify(artists, null, 2));
    res.json(deletedArtist);
  } else {
    res.status(404).json({ error: "Artist not found" });
  }
});
app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
