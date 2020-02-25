const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendgrid/mail");
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow...
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

app.get("/api", (req, res, next) => {
    res.send("API Status: Running");
});

app.post("/api/email", (req, res, next) => {
    sendGrid.setApiKey(
        "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"
    );
    const msg = {
        to: "brochado@mailfence.com",
        from: req.body.email,
        subject: "website contact",
        text: req.body.message
    };
    sendGrid
        .send(msg)
        .then(result => {
            // console.log(result);
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log("error: ", err);
            res.status(401).json({
                success: false
            });
        });
});

app.listen(3030, "0.0.0.0");
