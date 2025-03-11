import express from "express";

const hostname = "127.0.0.1";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello send!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
