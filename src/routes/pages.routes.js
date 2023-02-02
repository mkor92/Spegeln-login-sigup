import { Router } from "express";
import { loadMovies, loadMovie } from "../helpers/movies.js";
import { marked } from "marked";
import menu from "../../menu.js";

const router = Router();
const headerMenu = menu;

function menuWithActive(items, path) {
  return items.map((item) => ({
    active: item.link == path,
    ...item,
  }));
}

// Pages
router.get("/", async (req, res) => {
  res.render("index", {
    headerMenu: menuWithActive(headerMenu, "/"),
  });
});

router.get("/about", (req, res) => {
  res.render("about-us", {
    headerMenu: menuWithActive(headerMenu, "/about"),
  });
});

router.get("/events", (req, res) => {
  res.render("events", {
    headerMenu: headerMenu,
  });
});

router.get("/restaurant", async (req, res) => {
  const movies = await loadMovies();
  res.render("restaurant", {
    headerMenu: headerMenu,
    movieImage0: movies[0].attributes.image.url,
    movieTitle0: movies[0].attributes.title,
    movieImage1: movies[1].attributes.image.url,
    movieTitle1: movies[1].attributes.title,
    movieImage2: movies[2].attributes.image.url,
    movieTitle2: movies[2].attributes.title,
    movieImage3: movies[3].attributes.image.url,
    movieTitle3: movies[3].attributes.title,
  });
});

router.get("/salons", (req, res) => {
  res.render("salons", {
    headerMenu: headerMenu,
    path: req.url,
  });
});

router.get("/salon/a", (req, res) => {
  res.render("salons", {
    headerMenu: headerMenu,
    path: req.url,
  });
});

router.get("/salon/b", (req, res) => {
  res.render("salons", {
    headerMenu: headerMenu,
    path: req.url,
  });
});

router.get("/UC", (req, res) => {
  res.render("under-construction", {
    headerMenu: headerMenu,
  });
});

router.get("/booking", (req, res) => {
  res.render("booking", {
    headerMenu: headerMenu,
  });
});

// Filmer routes
router.get("/movies", async (req, res) => {
  const movies = await loadMovies();

  res.render("movies", {
    headerMenu: headerMenu,
    movies,
    movieHeader: "Alla filmer",
  });
});

router.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  if (movie) {
    res.render("movie-info", {
      headerMenu: headerMenu,
      movie,
      title: movie.attributes.title,
      intro: marked.parseInline(movie.attributes.intro),
      image: movie.attributes.image.url,
    });
  } else {
    res.status(404).render("404", {
      headerMenu: headerMenu,
    });
  }
});

export default router;
