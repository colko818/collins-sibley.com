const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 2112;

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/photo"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

        console.log('Successfully connected to MongoDB.');
    });

    console.log(`Server is running on port: ${port}`);
});