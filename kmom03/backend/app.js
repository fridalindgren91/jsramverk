const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 1337;

const index = require('./routes/index');
const hello = require('./routes/hello');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

const bcrypt = require('bcryptjs');
const saltRounds = 10;
const myPlaintextPassword = 'longandhardP4$$w0rD';

const jwt = require('jsonwebtoken');

const payload = { email: "user@example.com" };
const secret = "" + process.env.JWT_SECRET;

const token = jwt.sign(payload, secret, { expiresIn: '1h'});

app.use(cors());
app.use('/', index);
app.use('/hello', hello);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//environment variabel som ska sättas i terminalen, både lokalt och på servern. Ej gjort detta, gå tillbaka till materialet
jwt.verify(token, "" + process.env.JWT_SECRET, function(err, decoded) {
    if (err) {
        // not a valid token
    }

    // valid token
});

app.post("/reports",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => reports.addReport(res, req.body));

function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
            // send error response
        }

        // Valid token send on the request
        next();
    });
}

db.run("INSERT INTO users (email, password) VALUES (?, ?)",
    "user@example.com",
    "superlonghashedpasswordthatwewillseehowtohashinthenextsection", (err) => {
    if (err) {
        // returnera error
    }

    // returnera korrekt svar
});

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // spara lösenord i databasen.
});

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

//Middleware
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});

// Add a route
app.get("/", (req, res) => {
    const data = {
        data: {
            msg: "Hello World"
        }
    };
    res.json(data);
});

app.get("/hello/:msg", (req, res) => {
    const data = {
        data: {
            msg: req.params.msg
        }
    };
    res.json(data);
});

// Testing routes with method
app.get("/user", (req, res) => {
    res.json({
        data: {
            msg: "Got a GET request, sending back def 200"
        }
    });
});

app.post("/user", (req, res) => {
    res.status(201).json({
        data: {
            msg: "Got a POST request, sending back 201"
        }
    });
});

app.put("/user", (req, res) => {
    res.status(204).send();
});

app.delete("/user", (req, res) => {
    res.status(204).send();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// Start up server
app.listen(port, () => console.log(`Example API listening on port ${port}!`));

// Add routes for 404 and error handling
// Catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});
