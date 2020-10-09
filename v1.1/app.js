var express = require("express");
var app = express();
var bodyParser = require("body-parser");


// server needs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// express folders
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/scripts'));
app.use("/imgs", express.static(__dirname + '/imgs'));


// page routes
app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/social", (req, res) => {
    res.render("social");
})


// connect to localhost/3000
app.listen(3000, () => {
    console.log("Server running at PORT: 3000");
});
