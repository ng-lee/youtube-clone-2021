import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("This is Home Page");
};

const handleLogin = (req, res) => {
  return res.send("Login here");
};

app.get("/", handleHome);

app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`🚀 Server listening on http://local:${PORT}`);

app.listen(PORT, handleListening);
