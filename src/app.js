import express from "express";
import { resolve } from "path";
import pageRoutes from "./routes/pages.routes.js";
import apiRoutes from "./routes/api.routes.js";
import menu from "../menu.js";

const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(resolve("static")));

app.use(express.json());
app.use("/", pageRoutes);
app.use("/api", apiRoutes);
app.get("*", (req, res) => {
  res.render("404", {
    path: req.url,
    headerMenu: menu,
  });
});

export default app;
