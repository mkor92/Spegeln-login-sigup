import app from "./src/app.js";
const port = 5080;
app.listen(process.env.PORT || port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
