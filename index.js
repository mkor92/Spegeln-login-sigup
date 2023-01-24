import express from "express";

const headerMenu = [
  {
    label: "Hem",
    link: "/",
  },
  {
    label: "Om oss",
    link: "/about",
  },
  {
    label: "Biljettinfo",
    link: "/UC",
  },
  {
    label: "Presentkort",
    link: "/UC",
  },
];

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.get("/movies", (req, res) => {
  res.status(200).render("movies");
});

app.get("/salons", (req, res) => {
  res.status(200).render("salons");
});

app.get("/about", (req, res) => {
  res.status(200).render("about-us");
});

app.get("/events", (req, res) => {
  res.status(200).render("events");
});

app.get("/movie-info", (req, res) => {
  res.status(200).render("movie-info");
});

app.get("/restaurant", (req, res) => {
  res.status(200).render("restaurant");
});

app.get("/salon-a", (req, res) => {
  res.status(200).render("salonA");
});

app.get("/salon-b", (req, res) => {
  res.status(200).render("salonB");
});

app.get("/UC", (req, res) => {
  res.status(200).render("under-construction");
});

app.get("/booking", (req, res) => {
  res.status(200).render("booking");
});

app.use("/static", express.static("./static"));
app.use("/src", express.static("./src"));
app.listen(5080);
