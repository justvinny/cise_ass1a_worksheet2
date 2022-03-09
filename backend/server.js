const { response } = require("express");
const express = require("express");

const server = express();

const dotenv = require("dotenv");
dotenv.config();

const articles = require("./dummydata/articles");

// Routes
server.get("/", (req, res) => {
  res.send("API is running.");
});

server.get("/api/articles", (req, res) => {
  res.json(articles);
});

server.get("/api/articles/:id", (req, res) => {
    const id = req.params.id;
    const article = articles.find(article => article._id === id);
    console.log(`Id from request: ${id}`);
    
    if (article) res.json(article);
    else res.status(404).end();
});

// Run server
const PORT = process.env.PORT || 5000;
const SERVER_MESSAGE = console.log(
  `Server is working and listening on PORT ${PORT}`
);
server.listen(PORT, SERVER_MESSAGE);
