const express = require("express");
const app = express();
const PORT = 3000;
// IMPORTARE posts
const postsRouter = require("./routers/posts");

// asset statico
app.use(express.static("public"));
// Router api
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Mio server");
});

app.listen(PORT, () => {
  console.log(`il mio server http://localhost:${PORT}`);
});

// fallback
app.all("*", (req, res) => {
  res.status(404).send("<h1>NOT FOUND</h1>");
});
