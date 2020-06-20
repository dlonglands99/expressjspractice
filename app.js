//SETUP EXPRESS
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

//ITEMS LISTS
let items = [
    {name: "Toilet Roll", price: "4.99"},
    {name: "Macbook Pro 16", price: "1519.99"},
    {name: "Chilly's Bottle", price: "10.00"}
];

//GET REQUESTS
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/items", (req, res) => {
    res.render("items", {items: items});
});

//POST REQUEST
app.post("/addItem", (req, res) => {
    let itemName = req.body.itemName;
    let itemPrice = req.body.itemPrice;
    items.push({name: itemName, price: itemPrice});
    res.redirect("/items");
})

//localhost:3000
app.listen(3000, () => {
    console.log("Server running!");
})