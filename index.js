//---Basic code template to start---

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//-----------------------------------------

let posts = [
  {
    id: "1a",
    username: "iamharsh",
    content:
      "Hi. I love Cappuccino while reading my favourite novel. What's your favorite coffee?",
  },
  {
    id: "2b",
    username: "whysosakshi",
    content:
      "I am Sakshi and I love drama,  especially when it involves a strong female character.",
  },
  {
    id: "3c",
    username: "itskishan",
    content:
      "Hey there! I enjoy playing cricket with my sister, although she don't play well.",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
