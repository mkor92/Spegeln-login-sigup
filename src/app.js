import express from "express";
import pageRoutes from './routes/pages.routes.js';
import apiRoutes from './routes/api.routes.js';
import menu from '../menu.js';

const app = express();

app.set('port', 5080);
app.set("view engine", "ejs");
app.use("/static", express.static("./static"));

app.use('/', pageRoutes);
app.use('/api', apiRoutes);
app.get('*', (req, res) => {
    res.render("404", {
        path: req.url,
        headerMenu: menu
    });
});

export default app;