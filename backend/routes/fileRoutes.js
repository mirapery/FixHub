const express = require("express");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

const router = express.Router();

let gfs;

// Kun MongoDB-yhteys avataan, alustetaan GridFS
mongoose.connection.once("open", () => {
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection("pictures"); // Käytetään oikeaa bucket-nimeä
});

// GET /api/files/:filename - Palauttaa tiedoston nimen perusteella
router.get("/files/:filename", (req, res) => {
    const { filename } = req.params;

    gfs.files.findOne({ filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({ message: "File not found" });
        }

        // Tarkistetaan, onko tiedosto kuva
        if (file.contentType === "image/jpeg" || file.contentType === "image/png" || file.contentType === "image/jpg") {
            // Luodaan lukemiseen stream ja lähetetään tiedosto vastauksena
            const readStream = gfs.createReadStream(file.filename);
            readStream.pipe(res);
        } else {
            res.status(404).json({ message: "Not a valid image file" });
        }
    });
});

module.exports = router;
