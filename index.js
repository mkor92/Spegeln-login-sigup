import express from "express";
import fs from "fs/promises";

const app = express();

const MENU = [
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

async function renderTemplate(res, template, activePath) {
  const templateBuf = await fs.readFile("./templates/" + template);

  const menuBuf = await fs.readFile("./templates/menu.html");

  const headerBuf = await fs.readFile("./templates/header.html");
  const htmlItems = MENU.map((itemObj) => {
    const stateClass = itemObj.link == activePath ? "active" : "inactive";
    return `<li><a class="header-menu-item ${stateClass}" href="${itemObj.link}">${itemObj.label}</a></li>`;
  });

  const headerText = headerBuf
    .toString()
    .replace("%items%", htmlItems.join("\n"));

  const footerBuf = await fs.readFile("./templates/footer.html");

  const htmlText = templateBuf
    .toString()
    .replace("%header%", headerText)
    .replace("%menu%", menuBuf.toString())
    .replace("%footer%", footerBuf.toString());

  res.type("html");
  res.send(htmlText);
}

app.get("/", async (req, res) => {
  await renderTemplate(res, "index.html", "/");
});

app.get("/movies", async (req, res) => {
  await renderTemplate(res, "movies.html");
});

app.get("/salons", async (req, res) => {
  await renderTemplate(res, "salons.html");
});

app.get("/about", async (req, res) => {
  await renderTemplate(res, "about-us.html", "/about");
});

app.get("/events", async (req, res) => {
  await renderTemplate(res, "events.html");
});

app.get("/movie-info", async (req, res) => {
  await renderTemplate(res, "movie-info.html");
});

app.get("/restaurant", async (req, res) => {
  await renderTemplate(res, "restaurant.html");
});

app.get("/salon-a", async (req, res) => {
  await renderTemplate(res, "salonA.html");
});

app.get("/salon-b", async (req, res) => {
  await renderTemplate(res, "salonB.html");
});

app.get("/UC", async (req, res) => {
  await renderTemplate(res, "under-construction.html");
});

app.use("/static", express.static("./static"));
app.use("/src", express.static("./src"));
app.listen(3080);
