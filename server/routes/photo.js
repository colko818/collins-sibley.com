const express = require ("express");
const mongo = require ("mongodb");

const app = express();

const dbo = require("../db/conn");

app.post("photo/upload", function (req, res) {
    let db_connect = dbo.getDb();
    console.log('upload received');

    let newPhoto = {
        filename: req.body.filename,
        album: req.body.album,
        image: mongo.BSONType.BinData(req.body.image),
        date_uploaded: Date.now()
    };

    db_connect
        .collection("photo")
        .insertOne(newPhoto, function (err, _result) {
            // TODO handle error
            if (err) throw err;
            // TODO status for successful post?
            res.sendStatus(200);
        });
});

module.exports = app;