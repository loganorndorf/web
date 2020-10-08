var express = require("express");
var app = express();
var bodyParser = require("body-parser");


// server needs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// tell express to use the following folders for stylesheets and images
app.use(express.static(__dirname + '/styles'));
app.use("/imgs", express.static(__dirname + '/imgs'));


// landing page route
app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/contact", (req, res) => {
    res.send("LETS GET IN CONTACT");
})

app.get("/about", (req, res) => {
    res.send("HERE IS MY HISTORY");
})

app.get("/social", (req, res) => {
    res.send("HERE ARE MY SOCIAL ACCOUNTS");
})




// connect to localhost/3000
app.listen(3000, () => {
    console.log("Server running at PORT: 3000");
});
