import express from "express";
import { marked } from "marked";
import { loadMovie, loadMovies } from "./src/JS/movies.js";

let headerMenu = [
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

function menuWithActive(items, path) {
  return items.map((item) => ({
    active: item.link == path,
    ...item,
  }));
}

app.get("/movies", async (req, res) => {
  const movies = await loadMovies();
  res.status(200).render("movies", {
    headerMenu: headerMenu,
    movies,
    movieHeader: "Alla filmer",
  });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  console.log("hej" + movie);
  res.render("movie-info", {
    headerMenu: headerMenu,
    movie,
    intro: marked.parse(movie.attributes.intro),
  });
});

app.get("/", async (req, res) => {
  const movies = await loadMovies();
  res.status(200).render("index", {
    headerMenu: headerMenu,
    movies,
    movieHeader: "På bion just nu",
  });
});

app.get("/salons", (req, res) => {
  res.status(200).render("salons", {
    headerMenu: headerMenu,
  });
});

app.get("/about", (req, res) => {
  res.status(200).render("about-us", {
    headerMenu: menuWithActive(headerMenu, "/about"),
  });
});

app.get("/events", (req, res) => {
  res.status(200).render("events", {
    headerMenu: headerMenu,
  });
});

app.get("/restaurant", (req, res) => {
  res.status(200).render("restaurant", {
    headerMenu: headerMenu,
  });
});

app.get("/salon-a", (req, res) => {
  res.status(200).render("salonA", {
    headerMenu: headerMenu,
  });
});

app.get("/salon-b", (req, res) => {
  res.status(200).render("salonB", {
    headerMenu: headerMenu,
  });
});

app.get("/UC", (req, res) => {
  res.status(200).render("under-construction", {
    headerMenu: headerMenu,
  });
});

app.get("/booking", (req, res) => {
  res.status(200).render("booking", {
    headerMenu: headerMenu,
  });
});

app.use("/static", express.static("./static"));
app.use("/src", express.static("./src"));
app.listen(5080);
